import { Schema, model } from "mongoose";

const robotSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
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
    type: String,
    required: true,
  },
});

const Robot = model("Robot", robotSchema, "robots");

export default Robot;
