const Employee = require('../models/EmployeeModel')

// Create employees from the database
exports.createEmployee = async(req,res,next)=>{
    try {
        const { name, department,salary, position } = req.body;
        const existingEmployee = await Employee.findOne({ name });
        if (existingEmployee) {
          return res.json({ message: "Employee already exists" });
        }
        const employee = await Employee.create({ name, department,salary, position });
        await employee.save()
        res
          .status(201)
          .json({ message: "Employee successfully created", success: true, employee });
        next();
      } catch (error) {
        console.error(error);
      }
};
   

//Get All Employees

exports.getAllEmployees = async(req,res)=>{
    try{
        const employees=await Employee.find();
        //Sending response
        res.status(200).json(employees);
    }catch(err){
        res.status(500).json({err:'Internal Server Error'});
    }
};


//Update employee

exports.updateEmployee = async(req,res)=>{
    
    try{
        const {curname,updateName} = req.body;
        const updatedEmployee = await Employee.findOneAndUpdate(
            {name:curname},
            updateName,
            {new:true}
        );
        res
          .status(201)
          .json({ message: "Employee successfully created", success: true, updatedEmployee });
    }catch(err){
        res.status(500).json({err:'Internal Server Error'});
    }
};

// Delete employee

exports.deleteEmployee = async(req,res)=>{
    try{
        const {name} = req.params;
        existingEmployee = await Employee.findOneDelete({name});
        res.status(200).json({message:"deleted successfully"})

    }catch(err){
        res.status(500).json({err:'Internal Server Error'});
    }
};