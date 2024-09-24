import express from "express";
import * as authControllers from "../controllers/authControllers.js";
import * as usersSchemas from "../schemas/usersSchemas.js";
import validateBody from "../helpers/validateBody.js";

const authRouter = express.Router();

authRouter.post(
  "/",
  validateBody(usersSchemas.userRegistrationSchema),
  authControllers.createUser
);

authRouter.get("/", authControllers.getAllUsers);

export default authRouter;
