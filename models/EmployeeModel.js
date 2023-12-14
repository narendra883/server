const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Employee name is required"],
    },
    department:{
        type:String,
        required:[true,"Department is required"],
    },
    salary:{
        type:Number,
        required:[true,"Employee Salary is required"],
    },
    position:{
        type:String,
        required:[true],
    },
    
});

module.exports = mongoose.model("Employee", employeeSchema);