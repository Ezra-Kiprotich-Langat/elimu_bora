import Admin from "../models/adminModel.js";

export const getAllAdmins = async () => {
    return await Admin.find();
};

export const getAdminById = async (id) => {
    return await Admin.findById(id);
};

export const createAdmin = async (data) => {
    const admin = new Admin(data);
    return await admin.save();
};

export const updateAdminById = async (id, data) => {
    return await Admin.findByIdAndUpdate(id, data, { new: true });
};

export const deleteAdminById = async (id) => {
    return await Admin.findByIdAndDelete(id);
};
