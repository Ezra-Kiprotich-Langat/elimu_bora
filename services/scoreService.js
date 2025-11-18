import Score from "../models/scoreModel";

export const getAllScores = async () => {
    return await Score.find().populate("student").populate("subject");
};

export const getScoreById = async (id) => {
    return await Score.findById(id).populate("student").populate("subject");
};

export const createScore = async (data) => {
    const score = new Score(data);
    return await score.save();
};

export const updateScoreById = async (id, data) => {
    return await Score.findByIdAndUpdate(id, data, { new: true });
};

export const deleteScoreById = async (id) => {
    return await Score.findByIdAndDelete(id);
};
