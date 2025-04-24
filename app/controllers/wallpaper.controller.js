import Wallpaper from "../models/wallpaper.model.js";
import dotenv from "dotenv";
import {uploadToCloudinary} from "../utils/uploadToCloudinary.js";
import multer from "multer";

const storage = multer.memoryStorage()
// store the file in memory as buffer
const upload = multer({ storage: storage });

export const uploadWallpaper = async (req, res, next) => {
    console.log("uploadWallpaper");
    try {
        if (!req.file){
            console.error('Image not selected.')
            return next(404, 'Image not selected.');
        }
        console.log(req.body);
        console.log('req.file is', req.file)
        const {img, title, altTitle, category, tags} = req.body;

        if (!title) {
            console.error('Title not filled.')
            return next(404, 'Title not filled.');
        }
        const uploadedUrl = await uploadToCloudinary(req.file.buffer, title);
        console.log("uploading wallpaper...");
        if (!uploadedUrl) {
            return next(500, 'failed to upload image to cloudinary');
        }
        console.log("uploadedUrl", uploadedUrl);
        const newWallpaper = await Wallpaper.create({
            title: title,
            img: uploadedUrl.secure_url.toString(),
            width:uploadedUrl.width,
            height:uploadedUrl.height,
            format:uploadedUrl.format,
            assetId: uploadedUrl.asset_id,
            altTitle: altTitle,
            category: category,
            tags: tags,
            uploadedBy: req.user.username,
        });
        res.status(200).send(newWallpaper)
    } catch (error) {
        console.log(error);
        next(error)
    }
}

export const uploadFileMiddleware = upload.single('img');

export const getWallpapers = async (req, res, next) => {
    const wallpaper = await Wallpaper.find();
    if (!wallpaper) {
        return next(404, 'No wallpapers found.');
    }
    console.log('wallpaper is', wallpaper.length)
    return res.status(200).json(wallpaper)
}

export const getWallpaper = async (req, res, next) => {
    const wallpaper = await Wallpaper.findById(req.params.id);
    if (!wallpaper) {
        return next(404, 'Wallpaper not found.');
    }
    return res.status(200).json(wallpaper)
}