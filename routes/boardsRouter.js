import express from "express";
import * as boardsControllers from "../controllers/boardsControllers.js";

const boardsRouter = express.Router();

boardsRouter.get("/", boardsControllers.getAllBoards);

export default boardsRouter;
