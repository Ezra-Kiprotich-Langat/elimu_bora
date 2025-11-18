import Subject from "../models/subjectModel.js";

export const getAllSubjects = async () => {
    return await Subject.find().populate("teacher").populate("students");
};

export const getSubjectById = async (id) => {
    return await Subject.findById(id).populate("teacher").populate("students");
};

export const createSubject = async (data) => {
    const subject = new Subject(data);
    return await subject.save();
};

export const updateSubjectById = async (id, data) => {
    return await Subject.findByIdAndUpdate(id, data, { new: true });
};

export const deleteSubjectById = async (id) => {
    return await Subject.findByIdAndDelete(id);
};
