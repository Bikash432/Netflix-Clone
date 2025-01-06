import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";

const router = express.Router();

// router.get("/", async(req, res) => {
//     res.send("Server is ready...");
// });

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

export default router;