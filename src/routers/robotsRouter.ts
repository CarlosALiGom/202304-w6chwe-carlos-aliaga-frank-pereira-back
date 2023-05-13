import { Router } from "express";
import { getRobots } from "../server/controllers/robotsControllers.js";

const robotsRouter = Router();

robotsRouter.get("/", getRobots);

export default robotsRouter;
