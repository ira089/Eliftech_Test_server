import { Schema, model } from "mongoose";
const boardSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },

    event_date: {
      type: Date,
      default: new Date(),
    },
    organizer: {
      type: String,
      default: "",
    },
  },
  { versionKey: false }
);

const Board = model("board", boardSchema);

export default Board;
