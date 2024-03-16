const mongoose = require('mongoose');

// employee schema definition
const employeeSchema = new mongoose.Schema({
    id:{
      type:Number,
      required:true,
      unique:true
    },
    name: { 
      type: String, 
      required: true,
    },
    position: { 
      type: String, 
      required: true,
    },
    salary: { 
      type: Number, 
      required: true 
    },
  }
);

module.exports = mongoose.model('Employee', employeeSchema);