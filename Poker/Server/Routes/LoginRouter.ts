import express from "express";
import LoginController from "../Controllers/LoginController.ts";

const router = express.Router();

router.post("/",LoginController.getLoginController)

export default router