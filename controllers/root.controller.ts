import { Router, Request, Response, RequestHandler } from "express";

async function rootController(req: Request, res: Response) {
    return res.send("Hello World!");
}

export {
    rootController,
}