import express from "express";
import { Router, Request, Response } from "express";
const router: Router = express.Router();
import { rootController } from "../controllers/root.controller";

router.get("/", rootController);

export { 
    router
};