import express from "express";
import Student from "../models/studentModel.js";
import mongoose from "mongoose";

const studentService = ("../services/studentService.js")

export const getAllStudentsController = async(req, res)=>{
    try{
        const students = await Student.find();
        res.json(students)
    } catch (error){
        res.status(500).json({message: error.message})
    }
}

export const getStudentByIdController = async(req, res) => {
  const { id } = req.params;

  // Validate ID
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid student ID format" });
  }

  try {
    const student = await Student.findById(id)
      .populate("subjects")     // populate if you have this field

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createNewStudentController = async(req, res)=>{
    const {firstName, lastName, email, password, teachers, subjects} = req.body;
    try{
        const student = new Student({firstName, lastName, email, password, teachers,subjects});
        const saved = await student.save();
        res.status(201).json(saved);
    } catch (error){
        res.status(400).json({message: error.message})
    }
}

export const updateStudentByIdController = async(req, res)=>{
    const { id } = req.params;
    const updatedData = req.body;

  try {
    // Check if the ID is a valid MongoDB ObjectId
    if (!id || !id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }

    const updatedStudent = await Student.findByIdAndUpdate(
      id,
      { $set: updatedData },
      { new: true, runValidators: true } // return updated doc + validate fields
    );

    if (!updatedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }

    return res.status(200).json({
      message: "Student updated successfully",
      data: updatedStudent
    });

  } catch (error) {
    console.error("Update Error:", error);
    return res.status(500).json({
      message: "An error occurred while updating the student",
      error: error.message
    });
  }
};
export const deleteStudentByIdController = async(req, res)=>{
    try {
        await Student.findByIdAndDelete(
            req.params.id
        )
        res.json({message: "Student Deleted"})
    } catch (error){
        res.status(500).json({message: error.message})
    }
}