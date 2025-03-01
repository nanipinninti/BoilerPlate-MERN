import express from "express";
import { Signup, Login, Logout } from "../controllers/authController";

const authRouter = express.Router();

authRouter.post("/signup", Signup);
authRouter.post("/login", Login);
authRouter.get("/logout",Logout)

export default authRouter;