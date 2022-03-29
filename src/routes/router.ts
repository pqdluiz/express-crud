import { Router } from "express";
import { UserController } from "../controllers/user.controller";

const router = Router();
const user = UserController();

router.get("/", user.get);
router.put(":id", user.put);
router.post("/", user.post);
router.delete("/:id", user.remove);

export { router };
