import { Types } from "mongoose";
import { type RobotDocumentStructure } from "../types";

const robotsListMock: RobotDocumentStructure[] = [
  {
    _id: new Types.ObjectId(),
    name: "ChickenRobot",
    imageUrl: "casi",
    speed: 5,
    endurance: 1,
    dateOfCreation: "2011",
  },
  {
    _id: new Types.ObjectId(),
    name: "R2D2",
    imageUrl: "pongo",
    speed: 3,
    endurance: 3,
    dateOfCreation: "1978",
  },
  {
    _id: new Types.ObjectId(),
    name: "Mark zuckerberg",
    imageUrl: "foto",
    speed: 2,
    endurance: 2,
    dateOfCreation: "1980",
  },
];

export default robotsListMock;
