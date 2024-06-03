import express from "express";
import { loginUser, signUpUser } from "../controller/userController.js";

const router = express.Router();

router.route("/login").post(loginUser);
router.route("/signup").post(signUpUser);

export default router;
