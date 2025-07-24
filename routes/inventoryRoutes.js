import { Router } from "express";
import authMiddelware from "../middlewares/authMiddelware.js";
import {
  createInventoryController,
  getInventoryController,
  getDonorsController,
  getHospitalController,
  getOrganisationController,
  getOrganisationForHospitalController,
  getInventoryHospitalController,
  getRecentInventoryController,
} from "../controllers/inventoryController.js";

const router = Router();

// ADD INVENTORY || POST
router.post("/create-inventory", authMiddelware, createInventoryController);

// GET ALL BLOOD RECORDS
router.get("/get-inventory", authMiddelware, getInventoryController);

// GET RECENT BLOOD RECORDS
router.get(
  "/get-recent-inventory",
  authMiddelware,
  getRecentInventoryController
);

// GET HOSPITAL BLOOD RECORDS
router.post(
  "/get-inventory-hospital",
  authMiddelware,
  getInventoryHospitalController
);

// GET DONOR RECORDS
router.get("/get-donors", authMiddelware, getDonorsController);

// GET HOSPITAL RECORDS
router.get("/get-hospitals", authMiddelware, getHospitalController);

// GET ORGANISATION RECORDS
router.get("/get-organisation", authMiddelware, getOrganisationController);

// GET ORGANISATION RECORDS FOR HOSPITAL
router.get(
  "/get-organisation-for-hospital",
  authMiddelware,
  getOrganisationForHospitalController
);

export default router;
