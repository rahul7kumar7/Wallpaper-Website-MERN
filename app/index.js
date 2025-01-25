import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

const app = express();

app.listen(8080, ()=> {
    console.log(`listening server on port 8080`);
});

dotenv.config();

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('MongoDB Connected!');
    })
    .catch((err) => {
        console.log(`Error connecting to mongodb ${err}`);
    })
