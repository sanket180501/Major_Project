import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
config();
import loginRouter from "./routes/login.js";

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/auth', loginRouter)

mongoose.connect(process.env.DATABASE_URL)
    .then(() => {
        app.listen(3000, function() {
            console.log(`Server listening on ${this.address().port}`)
        })
    })
