import { Router } from "express";
import { testEmail } from "../controllers/test.controller.js";

const router = Router();

router.post("/", testEmail);

export default router;