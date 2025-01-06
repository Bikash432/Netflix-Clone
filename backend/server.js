// Mongodb -- 3ImnbZCmhslzFeXj
import express from "express";
// import dotenv from "dotenv";
import { ENV_VARS } from "./config/envVars.js";

import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./config/db.js";

// dotenv.config();

const app = express();

const PORT = ENV_VARS.PORT;

app.use(express.json()); //Will allow you to parse request.body object

// console.log("MONGO_URI : ", process.env.MONGO_URI);

app.use("/api/v1/auth", authRoutes);

app.listen(PORT, () => {
    console.log("Server Started at http://localhost:", +PORT);
    connectDB();
});