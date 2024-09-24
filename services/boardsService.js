import Board from "../models/Board.js";

export const getAllBoards = (setting) => Board.find({}, null, setting);

export const countBoards = () => Board.countDocuments();
