import { type Response, type Request, type NextFunction } from "express";
import Robot from "../../database/models/Robot.js";
import CustomError from "../CustomError.js";

export const getRobots = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const robots = await Robot.find().exec();
    res.status(200).json({ robots });
  } catch (error: unknown) {
    next(error);
  }
};

export const deleteRobot = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const robot = await Robot.findByIdAndDelete(id).exec();

    if (!robot) {
      const error = new CustomError(404, "Robot not found");

      throw error;
    }

    res
      .status(200)
      .json({ message: `Robot with the ${robot._id.toString()} id deleted ` });
  } catch (error: unknown) {
    next(error);
  }
};
