import { Router } from "express";
import passport from "passport";
import logIn from "./login";
import signUp from "./signup";

const router = Router();

router.post(
  "/signup",
  passport.authenticate("signup", { session: false }),
  signUp
);

router.post("/login", logIn);

export default router;
