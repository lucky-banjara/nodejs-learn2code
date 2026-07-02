const express = require("express");
const jwt = require("jsonwebtoken")

const router = express.Router();


router.post("/create", (req,res)=>{
    
// console.log(req.body);
// console.log(req.cookies);


    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({
            message: "Unauthorized"
        })
    }
    try {
        jwt.verify(token, process.env.JWT_SECRET)
    } catch (error) {
        return res.status(401).json({
            message: "Token is invalid"
        })
    }
    res.send("Post created successfully");

})


module.exports =router;