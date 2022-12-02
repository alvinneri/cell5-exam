import { Router } from "express";
import passport from "passport";
import addDog from "./addDog";
import getDogs from "./getDogs";
import getDog from "./getDog";
import updateDog from "./updateDog";
import deleteDog from "./deleteDog";

const router = Router();
router.get("/search", getDog);
router.get("/", passport.authenticate("jwt", { session: false }), getDogs);

router.post("/", passport.authenticate("jwt", { session: false }), addDog);
router.put(
  "/:dogId",
  passport.authenticate("jwt", { session: false }),
  updateDog
);
router.delete(
  "/:dogId",
  passport.authenticate("jwt", { session: false }),
  deleteDog
);

export default router;
