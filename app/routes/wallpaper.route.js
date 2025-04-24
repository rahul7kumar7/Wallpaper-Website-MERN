import express from 'express';
import {verifyUser} from "../utils/verifyUser.js";
import {uploadWallpaper, uploadFileMiddleware, getWallpapers, getWallpaper} from "../controllers/wallpaper.controller.js";

const router = express.Router();

router.post('/upload', verifyUser, uploadFileMiddleware, uploadWallpaper);
router.get('/get', getWallpapers);
router.get('/get/:id', getWallpaper);
export default router;