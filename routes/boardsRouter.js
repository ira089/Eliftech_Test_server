import express from "express";
import * as boardsControllers from "../controllers/boardsControllers.js";
// import { movieAddSchema, movieUpdateSchema } from "../schemas/moviesSchemas.js";
// import validateBody from "../decorators/validateBody.js";
// import isValidId from "../middlewares/isValidId.js";

const boardsRouter = express.Router();

boardsRouter.get("/", boardsControllers.getAllBoards);

export default boardsRouter;
