import express from "express";
import { createNotesController,getAllNotesController, getNoteByIdController, updateNoteByIdController,deleteNoteByIdController } from "../controllers/noteController.js";

const router = express.Router();

router.post('/create-notes',createNotesController);
router.get('/get-all-notes',getAllNotesController);
router.get('/get-notes-by-id/:id',getNoteByIdController);
router.put('/update-notes-by-id/:id', updateNoteByIdController);
router.delete('/delete-notes-by-id/:id', deleteNoteByIdController);

export default router;