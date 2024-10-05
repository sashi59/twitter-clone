import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import {v2 as cloudinary} from "cloudinary";
import mongoose from "mongoose";


import authRouter from "./routes/auth.Route.js"
import userRouter from "./routes/user.Route.js"
import postRouter from  "./routes/post.Route.js"
import notificationRouter from  "./routes/notification.Route.js"

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
 });

const app = express();
const PORT = process.env.PORT||  9000;

mongoose.connect(process.env.MONGO_URI).then(()=> console.log("MongoDb Connected"))

app.use(express.json());
app.use(express.urlencoded({ extended:false }));
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/post", postRouter);
app.use("/api/notification", notificationRouter);



app.get("/", (req, res) => {
    res.json("home");    
})



app.listen(PORT, console.log(`Server Started at PORT: ${PORT}`));


// console.log("Error in x", error.messege)
// return res.status(500).json({error:"Internal Server Error"})