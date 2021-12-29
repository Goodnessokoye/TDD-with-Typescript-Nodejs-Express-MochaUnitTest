import { Router, Request, Response, NextFunction } from "express";

const router = Router();

router.get("/", (req: Request, res: Response, NextFunction) => {
  res.sendStatus(200);
});

export default router;
