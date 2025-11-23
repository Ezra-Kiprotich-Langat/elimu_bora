import express from "express";
import Score from "../models/scoreModel.js";
import scoreService from "../services/scoreService.js";
import mongoose from "mongoose";

export const createNewScoresController = async(req, res)=>{
    const {score, examType, date, student, subject} = req.body;
    try{
        const newScore = new Score({score, examType, date, student, subject});
        const saved = await newScore.save();
        res.status(201).json(saved);
    } catch (error){
        res.status(400).json({message: error.message})
    }
};

export const getAllScoresController = async(req, res)=>{
    try{
        const scores = await Score.find();
        res.json(scores)
    } catch (error){
        res.status(500).json({message: error.message})
    }
};

export const getScoreByIdController = async(req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid score ID format" });
  }

  try {
    const score = await Score.findById(id)
      .populate("student")
      .populate("subject");

    if (!score) {
      return res.status(404).json({ message: "Score not found" });
    }

    res.status(200).json(score);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const updateScoreByIdController = async(req, res)=>{
    const { id } = req.params;
    const updatedData = req.body;

  try {
    // Check if the ID is a valid MongoDB ObjectId
    if (!id || !id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }

    const updatedScores = await Score.findByIdAndUpdate(
      id,
      { $set: updatedData },
      { new: true, runValidators: true } // return updated doc + validate fields
    );

    if (!updatedScores) {
      return res.status(404).json({ message: "Scores not found" });
    }

    return res.status(200).json({
      message: "Scores updated successfully",
      data: updatedScores
    });

  } catch (error) {
    console.error("Update Error:", error);
    return res.status(500).json({
      message: "An error occurred while updating the scores",
      error: error.message
    });
  }
    
};

// export const deleteScoreByIdController = async(req, res)=>{
//     try {
//         await Score.findByIdAndDelete(
//             req.params.id
//         )
//         res.json({message: "Scores Deleted"})
//     } catch (error){
//         res.status(500).json({message: error.message})
//     }
// };
export const deleteScoreByIdController = async(req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid ID format" });
  }

  try {
    const newdeleted = await Score.findByIdAndDelete(id);

    if (!newdeleted) {
      return res.status(404).json({ message: "Scores not found" });
    }

    res.status(200).json({ message: "Scores deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};