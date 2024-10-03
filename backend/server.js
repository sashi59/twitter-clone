const express = require("express")
const cookieParser = require("cookie-parser")
const dotenv = require("dotenv")
const mongoose = require("mongoose")

const authRouter = require("./routes/user.route");

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