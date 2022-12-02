import { Router } from "express";
import passport from "passport";
import deleteUser from "./deleteUser";
import logIn from "./login";
import signUp from "./signup";

const router = Router();

router.post(
  "/signup",
  passport.authenticate("signup", { session: false }),
  signUp
);

router.post("/login", logIn);

router.delete("/user", deleteUser);

export default router;
