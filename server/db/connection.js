const mongoose = require('mongoose');

// database connection setup
const connectDB = async () => {
  try{
    await mongoose.connect(process.env.MONGO_URI);
  }catch(error){
    console.log('Error while connecting to database')
  }
  
}

module.exports = connectDB;