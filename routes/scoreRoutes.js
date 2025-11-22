import express from "express";
import { createNewScoresController,getAllScoresController,updateScoreByIdController,deleteScoreByIdController } from "../controllers/scoreController.js";
const router = express.Router();

router.post("/create-scores", createNewScoresController);
router.get("/get-all-scores", getAllScoresController);
router.put("/update-scores-by-id/:id",updateScoreByIdController);
router.delete("/delete-scores-by-id/:id", deleteScoreByIdController);

export default router;