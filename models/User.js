import { Schema, model } from "mongoose";
import * as hooks from "./hooks.js";
import {
  emailRegepxp,
  hearEventList,
  fullName,
} from "../constants/userConstants.js";

const userShema = new Schema(
  {
    name: {
      type: String,
      match: fullName,
      required: [true, "Full name is required"],
    },
    email: {
      type: String,
      match: emailRegepxp,
      required: [true, "Email is required"],
      unique: true,
    },
    dateOfBirth: {
      type: Date,
      required: [true, "Date of birth is required"],
    },
    hearEvent: {
      type: String,
      enum: hearEventList,
      default: "social_media",
    },
  },
  { versionKey: false }
);

userShema.post("save", hooks.handleSaveError);

const User = model("user", userShema);
export default User;
