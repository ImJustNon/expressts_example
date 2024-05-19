import express from "express";
import { Express, Request, Response, RequestHandler, NextFunction } from 'express';
import createError from "http-errors";
import dotenv from "dotenv";
import { config } from "./config/config";
import morgan from "morgan";
import path from "path";
import fs from "fs";
import bodyParser from "body-parser";

import { router as rootRouter }  from "./routes/root";

dotenv.config();
const app: Express = express();
const urlEncoded: RequestHandler = bodyParser.urlencoded({
  limit: "50mb",
  extended: true
});
const jsonEncoded: RequestHandler = express.json({
  limit: "50mb",
});

app.use(morgan("dev"));
app.use(urlEncoded);
app.use(jsonEncoded);


app.use("/api", rootRouter);


app.use((req: Request, res: Response, next: NextFunction): void =>{
  next(createError(404));
});
app.listen(config.port, () => {
  console.log(`[server]: Server is running at http://localhost:${config.port}`);
});