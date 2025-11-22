import express from "express";
import { createNewTeacherController, getAllTeachersController,updateTeacherByIdController, deleteTeacherByIdController } from "../controllers/teacherController.js";
const router= express.Router();

router.post('/create-teacher', createNewTeacherController);
router.get('/get-all-teachers', getAllTeachersController);
router.put('/update-teacher-by-id/:id',updateTeacherByIdController);
router.delete('/delete-teacher-by-id/:id', deleteTeacherByIdController);

export default router;