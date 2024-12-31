// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/conn.js";
// import {app} from './app.js'
dotenv.config({
    path: './.env'
})

connectDB()