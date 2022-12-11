const express = require('express');
require("dotenv").config();
const {connection} = require("./config/db")
const {moviRouter} = require("./route/movi.route")
const app = express();

app.use(express.json());

app.use("/movi", moviRouter)

app.listen(process.env.port, async()=>{
    try{
        await connection;
        console.log(`server are running on port ${process.env.port} `)
    }
   catch(err){
    console.log("err",err)
   }

})

