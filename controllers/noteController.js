import express from "express";
import Note from "../models/noteModel.js";
import noteService from "../services/noteService.js";

export const createNotesController = async(req, res) => {
  try {
    const saved = await noteService.create(req.body);
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getAllNotesController = async(req, res) => {
  try {
    const notes = await noteService.getAll();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getNoteByIdController = async(req, res) => {
  try {
    const note = await noteService.getById(req.params.id);
    res.json(note);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateNoteByIdController = async(req, res) => {
  try {
    const updated = await noteService.updateById(req.params.id, req.body);
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteNoteByIdController = async(req, res) => {
  try {
    await noteService.deleteById(req.params.id);
    res.json({ message: "Note deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
