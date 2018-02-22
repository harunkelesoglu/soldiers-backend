const mongoose = require("mongoose");
const configDB = require("./../config/db.json");
mongoose.Promise = Promise;
const Schema = mongoose.Schema;
const User = mongoose.model('User',
new Schema({
        "name" : String,
        "surname" : String,
        "username" : String,
        "email" : String,
        "location" : Array,
        "statu" : String,
        "product" : Object,
        "orders" : Array
}),'users')
        mongoose.connect(configDB.url)
                .catch( err => console.log(err.stack))
                .then( () => { console.log("Connected to mlab") } );
       

module.exports = User;
