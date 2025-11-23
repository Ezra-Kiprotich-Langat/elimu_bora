import express from "express";
import { createNewScoresController,getAllScoresController,getScoreByIdController,updateScoreByIdController,deleteScoreByIdController } from "../controllers/scoreController.js";
const router = express.Router();

router.post("/create-scores", createNewScoresController);
router.get("/get-all-scores", getAllScoresController);
router.get("/get-score-by-id/:id", getScoreByIdController);
router.put("/update-scores-by-id/:id",updateScoreByIdController);
router.delete("/delete-scores-by-id/:id", deleteScoreByIdController);

export default router;