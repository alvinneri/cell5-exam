import { Router } from "express";
import passport from "passport";
import getMe from "./getMe";
import updateMe from "./updateMe";

const router = Router();

/* User */
router.get("/me", getMe);

router.patch("/me", updateMe);

export default router;
