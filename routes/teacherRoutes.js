import express from "express";
import { createNewTeacherController, getAllTeachersController,getTeacherByIdController, updateTeacherByIdController, deleteTeacherByIdController } from "../controllers/teacherController.js";
const router= express.Router();

router.post('/create-teacher', createNewTeacherController);
router.get('/get-all-teachers', getAllTeachersController);
router.get('/get-teacher-by-id/:id', getTeacherByIdController);
router.put('/update-teacher-by-id/:id',updateTeacherByIdController);
router.delete('/delete-teacher-by-id/:id', deleteTeacherByIdController);

export default router;