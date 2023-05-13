import "../loadEnviroments.js";
import morgan from "morgan";
import express from "express";

const app = express();

app.use(morgan("dev"));

app.use(express.json());

export default app;
