import Teacher from "../models/teacherModel.js";

export const getAllTeachers = async () => {
    return await Teacher.find().populate("students").populate("subjects");
};

export const getTeacherById = async (id) => {
    return await Teacher.findById(id).populate("students").populate("subjects");
};

export const createTeacher = async (data) => {
    const teacher = new Teacher(data);
    return await teacher.save();
};

export const updateTeacherById = async (id, data) => {
    return await Teacher.findByIdAndUpdate(id, data, { new: true });
};

export const deleteTeacherById = async (id) => {
    return await Teacher.findByIdAndDelete(id);
};
