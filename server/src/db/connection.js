const mongoose = require('mongoose');

const connectDb= async()=> {
    try{
     const res = await mongoose.connect('mongodb://127.0.0.1:27017/Almira');
     if(res) console.log('Connected to mongodb')
    }catch(err){
     console.log(err)
    }
   }



module.exports = connectDb;