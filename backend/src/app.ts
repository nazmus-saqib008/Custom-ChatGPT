import express from "express";
import {config} from "dotenv";
import dotenv from "dotenv";
import morgan from "morgan";
import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";
// config();
dotenv.config();
const app=express();
app.use(cors({origin: ["http://localhost:5173", "http://localhost:5000" , "https://custom-chatgpt-o6i3.onrender.com"],credentials:true}));
app.use(express.json());
//remove it in production
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(morgan("dev"));
app.use("/api/v1",appRouter);

export default app;