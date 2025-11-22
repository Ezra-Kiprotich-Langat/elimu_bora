import express from "express";
import { createNewSubjectController,getAllSubjectsController, updateSubjectByIdController, deleteSubjectByIdController } from "../controllers/subjectController.js";
const router = express.Router();

router.post('/create-subject',createNewSubjectController);
router.get('/get-all-subjects', getAllSubjectsController);
router.put('/update-subject-by-id/:id',updateSubjectByIdController);
router.delete('/delete-subject-by-id/:id', deleteSubjectByIdController);

export default router;