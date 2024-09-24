import * as authServices from "../services/authServices.js";

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
