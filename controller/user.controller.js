//loading the model
const userModel = require("../model/user.model");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const env = require('dotenv').config();
const generateUserId = ()=>'user-'+Math.floor(Math.random()*99999)+"-"+Date.now();
const hashedPass=(input)=>{
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(input, salt);
    // Store hash in your password DB
    return hash;
}
const createUser = async(req,res)=>{
 try{
    const userObj=    await userModel.create({
        'user_id':generateUserId(),
        'name':req.body.name,
        'email':req.body.email,
        'pass1':hashedPass(req.body.pass1),
     });
     if(!userObj) res.status(403).json({"message":"Unable to create User"});
     else res.status(200).json({"message":"SignUp Done"});
    }
    catch(error){
        if(error)
          res.status(403).json(error);
    }
};

//const bcrypt = require('bcryptjs');
const loginUser = async(req,res)=>{
      const userObj=  await  userModel.findOne({"email":req.body.email});
      if(userObj){
          let db_hashed_pass = userObj.pass1;
          var isValid = bcrypt.compareSync(req.body.pass1,db_hashed_pass) ? true : false;
          if(isValid){
            var token = jwt.sign({"user_id":userObj.user_id},process.env.privateKey,{expiresIn:'1h'});

            res.status(200).json({"message":"login successfull", "user":userObj,"token":token});

          }else{
            res.status(403).json({"message":"Wrong Cridentials"});
          }
      }else{
        res.status(403).json({"message":"no such email associated user found"});

      }
}

module.exports = {
    createUser,
    loginUser
};

console.log("user Controller is working");