import express from "express";
import { postRouter, sayHello } from "../controllers/helloController.js";
import { generateToken } from "../controllers/authController.js";
const router = express.Router();

router.get("/", sayHello);
router.post("/", postRouter);
router.get("/token", generateToken);
export default router;
