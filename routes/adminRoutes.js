import express from "express";
import {createNewAdminController,deleteAdminByIdController} from "../controllers/admincontroller.js"

const router = express.Router();

router.post("/create-admin", createNewAdminController);
router.delete("/delete-admin-by-id", deleteAdminByIdController);

export default router;
