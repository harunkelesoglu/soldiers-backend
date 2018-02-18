const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const logger = require("morgan");
const ctrlUser = require("./controllers/UserCtrl");
const errorHandler = require("./middlewares/errorHandler");
const app = express();
const PORT = process.env.PORT || 3000;

//Middlewares
app.use(logger('dev'));
app.use(session({
    secret: 'hackathon',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }))
app.use(bodyParser.json());
app.use(express.static(__dirname+"/public"));


//routes 
app.get("*",(req,res)=>{
    res.sendFile(__dirname,"index.html");
})
app.use("/api",ctrlUser);
app.use(errorHandler);


app.listen(PORT)