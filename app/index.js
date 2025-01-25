import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRouter from "./routes/auth.route.js"
import wallpaperRouter from "./routes/wallpaper.route.js"
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());

app.listen(8080, ()=> {
    console.log(`listening server on port 8080`);
});

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('MongoDB Connected!');
    })
    .catch((err) => {
        console.log(`Error connecting to mongodb ${err}`);
    })

app.use('/app/auth', authRouter);
app.use('/app/wallpaper', wallpaperRouter);

app.use((err, req, res, next)=> {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).send({
        success: false,
        status: statusCode,
        error: message
    });
});


