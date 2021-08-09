import express from "express";
import dotenv  from "dotenv";
import mongoose from "mongoose";
import route from "./router/router.js";
import cors  from "cors";
import bodyParser from "body-parser";
// dotenv.config({path: './config.env'});
dotenv.config({path:'./config.env'});
const app = express();
const PORT =9000;


app.use(bodyParser.json({extended : true}));
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());
app.use('/users', route);

mongoose.connect("mongodb://localhost:27017/task" ,{ useNewUrlParser: true, useUnifiedTopology: true})
 .then(()=> console.log("connetion successfull"))
 .catch((err)=> console.log(err));

app.listen(PORT ,()=>{
    console.log(   `server on ${PORT} `);
})