import express from "express";
import Admin from "../models/adminModel.js";
import adminService from "../services/adminService.js";
import mongoose from "mongoose";

export const createNewAdminController = async(req, res)=>{
    const {firstName, lastName, email, password, role} = req.body;
    try{
        const admin = new Admin({firstName, lastName, email, password,role});
        const saved = await admin.save();
        res.status(201).json(saved);
    } catch (error){
        res.status(400).json({message: error.message})
    }
}

// export const deleteAdminByIdController = async(req, res)=>{
//     try {
//         await Admin.findByIdAndDelete(
//             req.params.id
//         )
//         res.json({message: "Admin Deleted"})
//     } catch (error){
//         res.status(500).json({message: error.message})
//     }
// }
export const deleteAdminByIdController = async(req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid ID format" });
  }

  try {
    const deleted = await Admin.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "Admin not found" });
    }

    res.status(200).json({ message: "Admin deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
