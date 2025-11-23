import express from "express";
import mongoose from "mongoose";
import Subject from "../models/subjectModel.js";
import subjectService from "../services/subjectService.js";

export const createNewSubjectController = async(req, res)=>{
    const {title, description,teacher, students} = req.body;
    try{
        const newSubject = new Subject({title, description,teacher, students});
        const saved = await newSubject.save();
        res.status(201).json(saved);
    } catch (error){
        res.status(400).json({message: error.message})
    }
};

export const getAllSubjectsController = async(req, res)=>{
    try{
        const getAllSubjects = await Subject.find();
        res.json(getAllSubjects)
    } catch (error){
        res.status(500).json({message: error.message})
    }
};

export const getSubjectByIdController = async(req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid ID format" });
  }

  try {
    const subject = await Subject.findById(id)
      .populate("teacher")
      .populate("students");

    if (!subject) {
      return res.status(404).json({ message: "Subject not found" });
    }

    res.status(200).json(subject);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const updateSubjectByIdController = async(req, res)=>{
    const { id } = req.params;
    const updatedData = req.body;

  try {
    // Check if the ID is a valid MongoDB ObjectId
    if (!id || !id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }

    const updatedSubject = await Subject.findByIdAndUpdate(
      id,
      { $set: updatedData },
      { new: true, runValidators: true } // return updated doc + validate fields
    );

    if (!updatedSubject) {
      return res.status(404).json({ message: "Subject not found" });
    }

    return res.status(200).json({
      message: "Subject updated successfully",
      data: updatedSubject
    });

  } catch (error) {
    console.error("Update Error:", error);
    return res.status(500).json({
      message: "An error occurred while updating the subject",
      error: error.message
    });
  }
    
};


export const deleteSubjectByIdController = async(req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid ID format" });
  }

  try {
    const deleted = await Subject.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "Subject not found" });
    }

    res.status(200).json({ message: "Subject deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
