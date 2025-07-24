import express from "express";
import {
  loginController,
  registerController,
  currentUserController,
} from "../controllers/authController.js";
import authMiddelware from "../middlewares/authMiddelware.js"; // Import the middleware

const router = express.Router();

router.post("/login", loginController);
router.post("/register", registerController);
router.get("/current-user", authMiddelware, currentUserController); // ✅ Use middleware

export default router;
