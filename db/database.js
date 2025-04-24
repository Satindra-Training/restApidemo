const env     = require('dotenv').config();
const host   = process.env.HOST;
const port   = process.env.PORT;
const mongoose = require('mongoose');
//checking for Local MongoDB Database connection 
//const db_url =`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${host}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`;
  const db_url=`mongodb+srv://ejobindia:ejob123@food-api-cluster.e1tsv8e.mongodb.net/helloDB`;
  
const dbConnect = async()=>{
    try{
        const con =  await mongoose.connect(db_url);
        console.log("Connected Successfully to MongoDB");
        }
        catch(error){
         console.log(error);
        }
}
//dbConnect();
module.exports = dbConnect();
console.log("Database connection working");
