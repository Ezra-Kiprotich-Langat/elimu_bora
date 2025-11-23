import {getAllStudentsController,getStudentByIdController,createNewStudentController,updateStudentByIdController, deleteStudentByIdController} from "../controllers/studentController.js"
import express from "express"
const router = express.Router();

router.post("/create-student", createNewStudentController);
router.get("/get-all-students", getAllStudentsController);
router.get("/get-student-by-id/:id", getStudentByIdController);
router.put("/update-student-by-id/:id",updateStudentByIdController);
router.delete("/delete-student-by-id", deleteStudentByIdController);

export default router;