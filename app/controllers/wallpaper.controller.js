import Wallpaper from "../models/wallpaper.model.js";
import dotenv from "dotenv";
import {uploadToCloudinary} from "../utils/uploadToCloudinary.js";

export const uploadWallpaper = async (req, res, next) => {
    try {
        console.log(req.body);
        const {img, title, altTitle, category, tags} = req.body;
        if (!img || !title) {
            console.log('Data not filled correctly.')
            return next(404, 'Data not filled correctly.');
        }
        const uploadedUrl = await uploadToCloudinary(img, title);
        console.log("uploading wallpaper...");
        if (!uploadedUrl) {
            return next(500, 'failed to upload image to cloudinary');
        }
        console.log("uploadedUrl", uploadedUrl);
        const newWallpaper = await Wallpaper.create({
            title: title,
            img: uploadedUrl.toString(),
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

