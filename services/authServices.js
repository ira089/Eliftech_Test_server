import User from "../models/User.js";

export const addUser = (data) => User.create(data);

export const getAllUsers = () => User.find();
