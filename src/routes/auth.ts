//auth route going to be defined here

import { Router, Request, Response, NextFunction } from "express";
const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.sendStatus(200);
});

export default router;
