import "../loadEnviroments.js";
import morgan from "morgan";
import express from "express";
import robotsRouter from "../routers/robotsRouter.js";
import cors from "cors";

const app = express();

const corsOptions = {
  origin: "https://202304-w6chwe-frank-carlos-aliaga.netlify.app/com",
};

app.use(cors(corsOptions));

app.disable("x-powered-by");

app.use(morgan("dev"));

app.use(express.json());

app.use("/robots", robotsRouter);

export default app;
