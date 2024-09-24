import Joi from "joi";
import * as userConstants from "../constants/userConstants.js";

export const userRegistrationSchema = Joi.object({
  email: Joi.string().pattern(userConstants.emailRegepxp).required(),
  name: Joi.string().pattern(userConstants.fullName).required(),
  dateOfBirth: Joi.date().required(),
  hearEvent: Joi.string().valid(...userConstants.hearEventList),
});
