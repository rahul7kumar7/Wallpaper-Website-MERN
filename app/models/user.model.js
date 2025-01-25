import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    avatar: {
        type: String,
        default:'https://res.cloudinary.com/dg01gwwoc/image/upload/v1737823049/0d64989794b1a4c9d89bff571d3d5842_lui16w.jpg'
    },
    coverImage: {
        type: String,
        default:'https://res.cloudinary.com/dg01gwwoc/image/upload/v1735058948/cpbg7r7kfimrggk2fvxr.png'
    },
    fname:{
        type: String,
        default:''
    },
    lname:{
        type: String,
        default:''
    },
    website:{
        type: String,
        default:'#'
    }
})

const User = mongoose.model('User',userSchema);
export default User;