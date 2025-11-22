import express from "express";
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

export const updateSubjectByIdController = async(req, res)=>{
    try{
        const updateSubject = await Subject.findByIdAndUpdate(
            res.params.id,
            req.body,
            {new: true}
        );
        res.json(updateSubject)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
};

export const deleteSubjectByIdController = async(req, res)=>{
    try {
        await Subject.findByIdAndDelete(
            req.params.id
        )
        res.json({message: "Subject Deleted"})
    } catch (error){
        res.status(500).json({message: error.message})
    }
};