import { type Response, type Request, type NextFunction } from "express";
import Robot from "../../database/models/Robot.js";

export const getRobots = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const robotData = await Robot.find().exec();
    res.status(200).json({ robotData });
  } catch (error: unknown) {
    next(error);
  }
};
