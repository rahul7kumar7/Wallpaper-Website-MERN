import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken'

export const registerUser = async (req, res, next) => {
    console.log('register user');
    const {username, email, password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({
        username,
        email,
        password:hashedPassword,
    })
    try{
        await newUser.save();
        res.status(201).json("user created successfully.");
    } catch (error) {
        next(error);
    }
}

export const loginUser = async (req, res, next) => {
    console.log('loging user with:', req.body);
    const {email, password} = req.body;
    try{
        const validUser = await User.findOne({email});
        if(!validUser){return next(400, "user not found");}
        const validPassword =bcryptjs.compareSync(password, validUser.password);
        if(!validPassword){ return next(400, "invalid credentials");}
        const token = jwt.sign({id: validUser._id}, process.env.JWT_SECRET, {expiresIn: '1h'});
        const{password:pass, ...rest} = validUser._doc;
        res.cookie('access_token', token, {httpOnly:true}).status(200).json(rest);
    } catch(error){
        next(error);
    }
}