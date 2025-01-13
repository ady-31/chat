import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        
        if (!token) {
            return res.status(401).json({message: "No token provided"});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECERET);
        const user = await User.findById(decoded.userId).select("-password");
        
        if (!user) {
            return res.status(401).json({message: "User not found"});
        }

        req.user = user;
        next();
    } catch (error) {
        console.error("Auth Error:", error);
        res.status(401).json({message: "Invalid token"});
    }
};