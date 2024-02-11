import express from "express";
import cookieParser from "cookie-parser";
import cors from 'cors';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import authRoute from "./Routes/auth.js"

dotenv.config()

const app = express()
const port = process.env.PORT || 8000

const corsOptions = {
    origin:true
}

app.get('/',(req,res)=>{
    res.send('Api is Working') //will show the output in the browser
})

//database coonection
mongoose.set('strictQuery', false)
const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log("MongoDB database is connected")

    } catch (err) {
        console.log("MongoDB database is connection failed")
    }
}

//Middlware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use('/api/v1/auth', authRoute) //domain/api/v1/auth/register

app.listen(port, () => {
    connectDB();
    console.log("Server is running on port " + port); //show the output in command line interface
})
