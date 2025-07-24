import express from "express";
import authMiddelware from "../middlewares/authMiddelware.js";
import adminMiddleware from "../middlewares/adminMiddleware.js";
import {
  getDonorsListController,
  getHospitalListController,
  getOrgListController,
  deleteDonorController,
} from "../controllers/adminController.js";

const router = express.Router();

// GET || DONOR LIST
router.get(
  "/donor-list",
  authMiddelware,
  adminMiddleware,
  getDonorsListController
);

// GET || HOSPITAL LIST
router.get(
  "/hospital-list",
  authMiddelware,
  adminMiddleware,
  getHospitalListController
);

// GET || ORG LIST
router.get("/org-list", authMiddelware, adminMiddleware, getOrgListController);

// DELETE || DONOR
router.delete(
  "/delete-donor/:id",
  authMiddelware,
  adminMiddleware,
  deleteDonorController
);

// Export the router as default
export default router;
