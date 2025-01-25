import express from 'express';
import {verifyUser} from "../utils/verifyUser.js";
import {uploadWallpaper} from "../controllers/wallpaper.controller.js";
const router = express.Router();

router.post('/upload', verifyUser, uploadWallpaper);

export default router;