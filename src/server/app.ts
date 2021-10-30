import { Request, Response } from "express";
import express from "express";

const createServer = (): express.Application => {
  const app: express.Application = express();

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.get("/", (_req: Request, res: Response) => {
    res.send("Hello TS World");
  });

  return app;
};

export { createServer };
