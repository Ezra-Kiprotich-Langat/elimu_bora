import express from "express";
import Score from "../models/scoreModel.js";
import scoreService from "../services/scoreService.js";

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

export const updateScoreByIdController = async(req, res)=>{
    try{
        const score = await Score.findByIdAndUpdate(
            res.params.id,
            req.body,
            {new: true}
        );
        res.json(score)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
};

export const deleteScoreByIdController = async(req, res)=>{
    try {
        await Score.findByIdAndDelete(
            req.params.id
        )
        res.json({message: "Scores Deleted"})
    } catch (error){
        res.status(500).json({message: error.message})
    }
};