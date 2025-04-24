const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
       "user_id":{
            type:String,
            required:[true,'user_id is randomly generated']
       },
       "name":{
            type:String,
            required:[true,'name is required'],
            validate:{
                 validator: (nameValue)=>{
                    var nameRegex =/^[ a-zA-Z\-']{3,16}$/;
                    if(nameRegex.test(nameValue)) return true; return false;

                 },
                 message : (props)=>{
                    return `${props.value} must be Charecters min 3 to max 16 chars long`;
                 }
            },
            
       },
       "email":{
            type:String,
            required:[true,'email is Required'],
            validate:{
                validator: (emailValue)=>{
                    var emailRegex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if(emailRegex.test(emailValue)) return true; return false;

                },
                message : (props)=>{
                    return `${props.value} is invalid email address`
                }
            }
       },
       'pass1':{
           type:String ,
           required:[true,'Password is required'],
           validate:{
            validator: (passValue)=>{
            //     var passRegex =/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]$/;
            //     if(passRegex.test(passValue)) return true ; return false;
             },
            message: (props)=>{
                return `${props.value} must constaints atleast one uppercase,lowercase,special chars , min 8 to max 16 chars long. `
            }

           }
       },
       "created":{
          type:Date,
          required:[true],
          default: new Date()
       }
},{versionKey:false});

 
module.exports= mongoose.model('userModel',userSchema,'users');
               //name        //schema   //collections 
console.log("userModel is working");