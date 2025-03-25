const mongoose = require('mongoose');

const connectDB = async () => {
    try{
       await mongoose.connect(Process.env.MONGODB_URL);
       console.log('mongoDB connected successfully');
    }catch(error){
     console.error('mongoDB connection error:' , error);
     process.exit(1);
    }
    
};
module.exports = connectDB;
