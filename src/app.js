import express from "express";
import cors from "cors";
import cookieParser from 'cookie-parser'
const app= express();

//used for middelwares
app.use(cors({
    origin: process.env.CorsOrigin,
    credentials: true,
}));



//preparing to get data in backend from various sources 
app.use(express.json({json: "2kb"})) //data coming in json format //not necessary to write json: "2kb"}
app.use(express.urlencoded()) //data coming from URL
app.use(express.static("public"))
app.use(cookieParser())

export { app };


//when we reach a url "/something" and we try to resolve the request it then if we want to do something in between getting request and resolving, we call it middleware.
//we can have multiple middleware.
//its not only (req, res) but it is (err, req, res, next) and when we use next, we are using middelwares.