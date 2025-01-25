import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
export const verifyUser = async (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) return next(401, 'You are not authorized');

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decodedToken.id).select('username'); // Fetch only the username
        if (!user) return next(404, 'User not found');

        req.user = { id: decodedToken.id, username: user.username }; // Attach username to req.user
        next();
    } catch (err) {
        return next(403, 'Forbidden');
    }
};