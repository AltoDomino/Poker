import express from "express";
import RegistrationController from "../Controllers/RegistrationController";

const router = express.Router();

router.post("/", RegistrationController.getRegistrationController)

export default router;
