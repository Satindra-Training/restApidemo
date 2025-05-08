const jwt = require('jsonwebtoken');
const env = require('dotenv').config();
const checkUserLogin = (req,res,next)=>{
       try{
            jwt.verify(req.headers.token,process.env.privateKey);
            next(); //next available resources.
       }catch(error){
           if(error) return res.status(403).json({"error":error});
       }
}

module.exports = checkUserLogin;
console.log("CheckUserLogin Middleware is working");
