// import bcryptjs from "bcryptjs";
// import jwt from "jsonwebtoken";
// import "dotenv/config.js"
import HttpError from "../helpers/HttpError.js";
import * as authServices from "../services/authServices.js";
// import fs from "fs/promises";
// import path from "path";
// import gravatar from "gravatar";
// import Jimp from "jimp";
// import { nanoid } from "nanoid";
// import sendEmail from "../helpers/sendEmail.js";

// const avatarPath = path.resolve("public", "avatars");

// const {JWT_SECRET, PROJECT_URL} = process.env;

export const createUser = async (req, res, next) => {
  try {
    const result = await authServices.addUser({ ...req.body });
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

export const getAllUsers = async (req, res, next) => {
  try {
    const result = await authServices.getAllUsers();
    res.status(200).json({
      result,
    });
  } catch (error) {
    next(error);
  }
};
