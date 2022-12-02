import { Router } from "express";
import passport from "passport";
import authentication from "./api/v1/authentication";
import user from "./api/v1/user";
import dog from "./api/v1/dog";

const router = Router();

/* Authentication Routes */
router.use("/api/v1/auth", authentication);

/* User Routes */
router.use(
  "/api/v1/user",
  passport.authenticate("jwt", { session: false }),
  user
);

router.use("/api/v1/dogs", dog);

export default router;
