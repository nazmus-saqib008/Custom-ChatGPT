import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
// config();
dotenv.config();
const __dirname= path.resolve();
const app = express();
app.use(express.static(path.join(__dirname,'frontend','dist')));

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'))
})
app.use(cors({ origin: ["http://localhost:5173", "http://localhost:5000" , "https://custom-chatgpt-o6i3.onrender.com"], credentials: true }));
// app.use(cors());
app.use(express.json());
//remove it in production
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(morgan("dev"));

app.use("/api/v1", appRouter);
export default app;
//# sourceMappingURL=app.js.map