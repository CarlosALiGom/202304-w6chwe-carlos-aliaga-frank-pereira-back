import { Schema, model } from "mongoose";

const RobotSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  speed: {
    type: Number,
    required: true,
  },
  endurance: {
    type: Number,
    required: true,
  },
  dateOfCreation: {
    type: Number,
    required: true,
  },
});

const Robot = model("robots", RobotSchema, "robots");

export default Robot;
