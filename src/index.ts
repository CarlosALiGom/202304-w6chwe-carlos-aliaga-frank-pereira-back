import "./loadEnviroments.js";
import createDebug from "debug";
import mongoose from "mongoose";
import app from "./server/index.js";

const debug = createDebug("robots-api:root");
const mongoDbConnection = process.env.MONGODB_CONNECTION;

if (!mongoDbConnection) {
  debug("connection error");
  process.exit(1);
}

try {
  await mongoose.connect(mongoDbConnection);
  debug("Connection succesfull");
} catch (error: unknown) {
  debug(`Error ${(error as Error).message}`);
}

const port = process.env.PORT ?? 4000;

app.listen(port, () => {
  debug(`Listening on http://localhost:${port}`);
});
