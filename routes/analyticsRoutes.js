import express from "express";
import authMiddelware from "../middlewares/authMiddelware.js";
import analyticsController from "../controllers/analyticsController.js";

const router = express.Router();

// GET BLOOD DATA
router.get(
  "/bloodGroups-data",
  authMiddelware,
  analyticsController.bloodGroupDetailsContoller
);

export default router;
