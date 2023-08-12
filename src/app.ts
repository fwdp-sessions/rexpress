require("dotenv").config();

import express, { Response } from "express";
import { drizzle, BetterSQLite3Database } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";

const sqlite = new Database("sqlite.db");
export const database: BetterSQLite3Database = drizzle(sqlite);
const app = express();

async function bootstrap() {
  // Testing
  app.get("/api", (request, response: Response) => {
    response.status(200).json({
      status: "success",
      message: "Ok 👌",
    });
  });
  app.get("/api/healthcheck", (request, response: Response) => {
    response.status(200).json({
      status: "success",
      message: "Ok 👌",
    });
  });

  const port = process.env.PORT || 3001;

  app.listen(`0.0.0.0:${port}`, () => {
    console.log(`Server running on port ${port} 🚀`);
    console.log(`Healthcheck http://localhost:${port}/api/healthcheck`);
  });
}

bootstrap().catch((error) => {
  throw error;
});
