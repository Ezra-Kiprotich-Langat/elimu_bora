const {getAllStudentsController,createNewStudentController,updateStudentByIdController, deleteStudentByIdController } = require("../controllers/studentController.js");
const express = require("expresss");
const router = express.Router();

router.post("/create-student", createNewStudentController);
router.get("/get-all-students", getAllStudentsController);
router.put("/update-student-by-id/:id",updateStudentByIdController);
router.delete("/delete-student-by-id", deleteStudentByIdController);

export default router