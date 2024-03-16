const Employee = require('../models/employeeModel.js');

// get all the employees data
const getEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        return res.send({
            success: true,
            message: "Data fetched successfully",
            employees
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
}

// save the employee into database
const saveEmployeeData = async (req, res) => {
    try {
        //check is an employee with given id already exists
        const employeeExists = await Employee.findOne({ id: req.body.id });
        if (employeeExists) {
            res.status(201).send({
                success: false,
                message: "Employee exists with similar ID. Please change employee ID.",
            });
        } else {
            await new Employee(req.body).save();
            res.status(201).send({
                success: true,
                message: "Data saved successfully",
            });
        }

    } catch (error) {
        res.status(400).send({
            success: false,
            error: error.message
        });
    }
}

// update the employee data
const updateEmployeeData = async (req, res) => {
    const { id, } = req.params;
    try {
        const employee = await Employee.findByIdAndUpdate(id, {
            $set: {
                name: req.body.name,
                position: req.body.position,
                salary: req.body.salary
            }
        },
            { new: true }
        );
        if (!employee) {
            res.send({
                success: false,
                employee,
                message: "Some error occured"
            });
        } else {
            res.send({
                success: true,
                employee,
                message: "Employee data updated successfully"
            });
        }
    } catch (error) {
        res.send({
            success: false,
            error: error.message
        });
    }
}

// delete a employee by given id
const deleteEmployee = async (req, res) => {
    const { id } = req.params;
    try {
        const employee = await Employee.findByIdAndDelete(id);

        if (employee) {
            res.status(200).send({
                success: true,
                message: 'Employee deleted successfully'
            });
        } else {
            res.status(200).send({
                success: false,
                message: 'Employee not found or some error occured'
            });
        }

    } catch (error) {
        res.status(404).send({
            success: false,
            error: error.message
        });
    }
}


// search an employee by name or id
const searchEmployee = async (req, res) => {
    const { query } = req.params;
    try {
        let employees;
        if (isNaN(query)) {
            employees = await Employee.find({ name: query });
        } else {
            employees = await Employee.find({ id: Number(query) });
        }

        if (!employees) {
            res.status(200).send({
                success: false,
                message: "No empployee found."
            });
        } else {
            res.status(200).send({
                success: true,
                employees
            });
        }

    } catch (error) {
        res.status(404).send({
            success: false,
            error: error.message
        });
    }
}

module.exports = { saveEmployeeData, updateEmployeeData, deleteEmployee, getEmployees, searchEmployee }