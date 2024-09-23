import express from "express";
import boardsControllers from "../controllers/boardsControllers";
// import { movieAddSchema, movieUpdateSchema } from "../schemas/moviesSchemas.js";
// import validateBody from "../decorators/validateBody.js";
// import isValidId from "../middlewares/isValidId.js";

const boardsRouter = express.Router();

boardsRouter.get("/", boardsControllers.getAll);

export default boardsRouter;
