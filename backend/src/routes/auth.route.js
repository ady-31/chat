import express from "express";
import { checkAuth, login, logout, signup, updateProfile } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router()

router.post("/signup", signup);

// Route to handle user login
router.post("/login", login);

// Route to handle user logout
router.post("/logout", logout);

// Route to handle profile update, protected route
router.put("/update-profile", protectRoute, updateProfile);

// Route to check user authentication status, protected route
router.get("/check", protectRoute, checkAuth);

// Export the router to be used in other parts of the application
export default router;
