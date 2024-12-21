import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"
import dotenv from "dotenv"
import { connectDb } from "./lib/db.js";
import authRouter from "./routes/auth.route.js" 
const app = express();
const PORT = process.env.PORT || 3001;
dotenv.config();
app.use(cors({
   origin:"http://localhost:5173",
   credentials:true, 
}))

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());

app.use("/api/auth",authRouter)

app.listen(PORT,()=>{
    console.log(`Server started at : ${PORT}`);
    connectDb();
});

