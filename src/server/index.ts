import "../loadEnviroments.js";
import morgan from "morgan";
import express from "express";
import robotsRouter from "../routers/robotsRouter.js";

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.disable("x-powered-by");

app.use(morgan("dev"));

app.use(express.json());

app.use("/robots", robotsRouter);

export default app;
