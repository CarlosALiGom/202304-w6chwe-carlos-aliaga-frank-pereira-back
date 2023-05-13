import "../loadEnviroments.js";
import morgan from "morgan";
import app from "../index.js";
import debug from "debug";
import express from "express";

const port = process.env.PORT ?? 4000;

app.use(express.json());

app.use(morgan("dev"));

app.listen(port, () => {
  debug(`Listening on http://localhost:${port}`);
});
