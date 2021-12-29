import { Router } from "express";
import auth from "./auth";
import user from "./user"

const router = Router();

router.use("/auth", auth);
router.use("/user", user)

export default router;

//going to pull in the auth, user etc routes here
