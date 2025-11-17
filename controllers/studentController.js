const express = require('express');
const studentService = require("../services/studentService.js");

export const getAllStudentsController = async(req, res)=>{
    try{
        const students = await Student.find();
        res.json(students)
    } catch (error){
        res.status(500).json({message: error.message})
    }
}

export const createNewStudentController = async(req, res)=>{
    const {firstName, lastName, email, password, classLevel, subjects, assignedTeacher} = req.body;
    try{
        const student = new Student({firstName, lastName, email, password, classLevel, subjects, assignedTeacher});
        const saved = await student.save();
        res.status(201).json(saved);
    } catch (error){
        res.status(400).json({message: error.message})
    }
}

export const updateStudentByIdController = async(req, res)=>{
    try{
        const student = await Student.findByIdAndUpdate(
            res.params.id,
            req.body,
            {new: true}
        );
        res.json(student)
    } catch (error) {
        res.status(400).json({message: error.message})
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