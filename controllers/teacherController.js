import express from "express";
import Teacher from "../models/teacherModel.js";
import teacherService from "../services/teacherService.js";

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
export const updateTeacherByIdController = async(req, res)=>{
    try{
        const updateTeacher = await Teacher.findByIdAndUpdate(
            res.params.id,
            req.body,
            {new: true}
        );
        res.json(updateTeacher)
    } catch (error) {
        res.status(400).json({message: error.message})
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