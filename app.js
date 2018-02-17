const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const logger = require("morgan");
const ctrlUser = require("./controllers/UserCtrl");
const app = express();
const PORT = process.env.PORT || 3000;

//Middlewares
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(express.static(__dirname+"/public"));


//routes 
app.get("*",(req,res)=>{
    res.sendFile(__dirname,"index.html");
})
app.post("/api/*",ctrlUser);


app.listen(PORT)