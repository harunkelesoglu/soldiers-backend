const express = require("express");
const router = express.Router();
const User = require("./../models/User");

router.post('/authenticate',(req,res,next)=>{
    debugger;
    const where = req.body;
        User.findOne(where)
            .then( user => {
                if(user){
                    req.session.user = user;
                    res.json(user);
                }else{
                    throw new Error("User is not found")
                }
            })
            .catch(next)
})

router.post('/seller/addOrder',(req,res,next)=>{
    const order = req.body;
    
    User.findOneAndUpdate({"username":"keles0glu"},{$push:{orders:order}})
        .then( (user) => {res.json(user)})
        .catch(next)
        
});

router.post('/seller/getAllSeller',(req,res,next)=>{

    User.find({'statu':'satici'})
        .then( user => {res.json(user)})
        .catch(next)
})

router.post('/buyer/addOrder',(req,res,next)=>{

    User.findOneAndUpdate({"username":"aysehanimi"},{$push:{orders:order}})
        .then( (user) => { res.json(user)})
        .catch( next );
    
});
module.exports = router;