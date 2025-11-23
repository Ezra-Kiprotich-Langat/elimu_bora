import express from "express";
import Teacher from "../models/teacherModel.js";
import teacherService from "../services/teacherService.js";
import mongoose from "mongoose";

export const createNewTeacherController = async(req, res)=>{
    const {firstName, lastName, email, password,students, subjects} = req.body;
    try{
        const newTeacher = new Teacher({firstName, lastName, email, password,students, subjects});
        const saved = await newTeacher.save();
        res.status(201).json(saved);
    } catch (error){
        res.status(400).json({message: error.message})
    }
};

export const getAllTeachersController = async(req, res)=>{
    try{
        const getAllTeachers = await Teacher.find();
        res.json(getAllTeachers)
    } catch (error){
        res.status(500).json({message: error.message})
    }
};

export const getTeacherByIdController = async(req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid teacher ID format" });
  }

  try {
    const teacher = await Teacher.findById(id)
      .populate("subjects")     // if teacher has subjects field
      .populate("students");    // if teacher teaches students

    if (!teacher) {
      return res.status(404).json({ message: "Teacher not found" });
    }

    res.status(200).json(teacher);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateTeacherByIdController = async(req, res)=>{
    const { id } = req.params;
    const updatedData = req.body;

  try {
    // Check if the ID is a valid MongoDB ObjectId
    if (!id || !id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }

    const updatedTeacher = await Teacher.findByIdAndUpdate(
      id,
      { $set: updatedData },
      { new: true, runValidators: true } // return updated doc + validate fields
    );

    if (!updatedTeacher) {
      return res.status(404).json({ message: "Teacher not found" });
    }

    return res.status(200).json({
      message: "Teacher updated successfully",
      data: updatedTeacher
    });

  } catch (error) {
    console.error("Update Error:", error);
    return res.status(500).json({
      message: "An error occurred while updating the teacher",
      error: error.message
    });
  }
};

export const deleteTeacherByIdController = async(req, res)=>{
    try {
        await Teacher.findByIdAndDelete(
            req.params.id
        )
        res.json({message: "Teacher Deleted"})
    } catch (error){
        res.status(500).json({message: error.message})
    }
};