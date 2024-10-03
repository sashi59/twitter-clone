import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";


import authRouter from "./routes/user.route.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT||  9000;

mongoose.connect(process.env.MONGO_URI).then(()=> console.log("MongoDb Connected"))

app.use(express.json());
app.use(express.urlencoded({ extended:false }));
app.use(cookieParser());

app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
    res.json("home");    
})



app.listen(PORT, console.log(`Server Started at PORT: ${PORT}`));




// if(!x){

//     return res.status(400).json({error:""})
// }


// console.log("Error in x", error.messege)
// return res.status(500).json({error:"Internal Server Error"})