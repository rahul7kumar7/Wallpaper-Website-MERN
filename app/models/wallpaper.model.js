import mongoose from 'mongoose';

const wallpaperSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    img:{
        type: String,
        required: true
    },
    width:{
        type: Number,
    },
    height:{
        type: Number,
    },
    format:{
        type:String,
        required:true
    },
    assetId:{
        type: String,
    },
    altTitle:{
        type: String,
    },
    uploadedBy: {
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    tags:{
        type: String,
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

const Wallpaper = mongoose.model('Wallpaper', wallpaperSchema);
export default Wallpaper;