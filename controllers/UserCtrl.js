const express = require("express");
const router = express.Router();
const User = require("./../models/User");

router.post('/authenticate',(req,res,next)=>{
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
    const where = {"username":req.body.sellername}
    let order = req.body;
    delete order.sellername;
    User.findOneAndUpdate(where,{$push:{orders:order}})
        .then( (user) => { debugger;res.json(user)})
        .catch(next)
        
});
router.post('/seller/Orders',(req,res,next)=>{
    User.find({"orders":{$elemMatch:req.body}})
        .then((orders) =>{res.json(orders)})
        .catch(next)
})

router.post('/seller/getAllSeller',(req,res,next)=>{

    User.find({'statu':'satici'})
        .then( user => {res.json(user)})
        .catch(next)
})
router.post('/buyer/addOrder',(req,res,next)=>{
    const where = {"username":req.body.username}
    const order = req.body;
    order.username = order.sellername;
    delete order.sellername;
    debugger;
    User.findOneAndUpdate(where,{$push:{orders:order}})
        .then( (user) => {res.json(user)})
        .catch( next );
    
})

module.exports = router;