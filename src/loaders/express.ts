import express from "express";
import morgan from "morgan";
import cors from "cors";
import { Request, Response } from "express";

export default ({ app }: { app: express.Application }) => {
  /**
   * Health Check endpoints
   */

  app.get("/", (req: Request, res: Response) => {
    res.status(200).send("API ACTIVE").end();
  });

  app.get("/status", (req: Request, res: Response) => {
    res.status(200).send("STATUS OK").end();
  });

  app.use(cors({ origin: "*" }));
  app.use(morgan("dev"));

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  console.log("✅ Express: OK");
};
