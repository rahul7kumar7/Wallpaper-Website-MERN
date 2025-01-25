import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

export const uploadToCloudinary = async (image, title) => {
    // cloudinary config
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SEC
    });

    // ping to check working or not
    await cloudinary.api.ping((error, result) => {
        if (error) {
            console.error("Cloudinary configuration error:", error);
        } else {
            console.log("Cloudinary configuration successful:", result);
        }
    });
    try {
         const result = await cloudinary.uploader.upload(
            image, {
                resource_type: "image",
                public_id:title,
                overwrite: false,
            });
         console.log(`Image uploaded successful: ${result.url}`);
         return result.url;
        }
        catch (error){
            console.log(`Error connecting to cloudinary: ${error}`)
            return false
        }
}