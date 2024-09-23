import Joi from "joi";
import * as userConstants from "../constants/userConstants.js";

export const userRegistrationSchema = Joi.object({
  email: Joi.string().pattern(userConstants.emailRegepxp).required(),
  name: Joi.string().required(),
  dateOfBirth: Joi.string().valid(...userConstants.subscriptionList),
});
