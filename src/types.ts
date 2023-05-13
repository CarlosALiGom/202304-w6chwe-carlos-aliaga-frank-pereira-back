import { type Types } from "mongoose";

export interface RobotStateStructure {
  name: string;
  imageUrl: string;
  speed: number;
  endurance: number;
  dateOfCreation: string;
}

export interface RobotStructure extends RobotStateStructure {
  id: string;
}

export interface RobotDocumentStructure extends RobotStateStructure {
  _id: Types.ObjectId;
}
