import createDebug from "debug";
import { type NextFunction, type Request, type Response } from "express";
import CustomError from "../CustomError";

const debugError = createDebug(
  "robots-api:server:middlewares:errorMiddlewares"
);

export const notFoundError = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const error = new CustomError(404, "Endpoint not found");

  next(error);
};

export const generalError = (
  error: CustomError,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  debugError(error.message);

  const statusCode = error.statusCode || 500;

  const message = error.statusCode
    ? error.message
    : "Please, come back in five minutes";

  res.status(statusCode).json({ message });
};
