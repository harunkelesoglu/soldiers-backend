const mongoose = require("mongoose");
const configDB = require("./../config/db.json");
mongoose.Promise = Promise;
mongoose.connect(configDB.url)
        .catch( e => console.log(e) )
        .then( () => console.log("connected") );

