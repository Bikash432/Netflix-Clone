import express from "express";
import { login, logout, signup } from "../controllers/auth.controller";

const router = express.Router();

router.get("/", async(req, res) => {
    res.send("Server is ready...");
});

router.get("/signup", signup);

router.get("/login", login);

router.get("/logout", logout);

export default router;