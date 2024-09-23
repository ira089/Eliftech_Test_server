import Board from "../models/Board";

export const getAllBoards = (setting) => Board.find({}, null, setting);

export const countBoards = () => Board.countDocuments();
