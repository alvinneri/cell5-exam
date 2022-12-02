import { Router } from "express";
import addDog from "./addDog";
import getDogs from "./getDogs";
import getDog from "./getDog";
import updateDog from "./updateDog";
import deleteDog from "./deleteDog";

const router = Router();

router.get("/", getDogs);
router.get("/search", getDog);
router.post("/", addDog);
router.put("/:dogId", updateDog);
router.delete("/:dogId", deleteDog);

export default router;
