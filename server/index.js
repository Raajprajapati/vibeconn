const express = require('express');
const connectDB = require('./db/connection.js');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
const {getEmployees, updateEmployeeData, deleteEmployee, saveEmployeeData, searchEmployee} = require('./controllers/employeeController.js')

// environment variables configuration
dotenv.config({path: './.env'})

// middlewares
app.use(express.json());
app.use(cors()) //to avoid cross orgin errors

// database connection
connectDB();

// get all employees data, API => GET /employees
app.get('/employees', getEmployees);

// add a new employee, API => POST /employees
app.post('/employees', saveEmployeeData);

// update employees data, API => PUT employees/:id
app.put('/employees/:id', updateEmployeeData);

// delete an employee, API => DELETE employees/:id
app.delete('/employees/:id', deleteEmployee);

// get Employee by name or id  GET employees/search/:query
app.get('/employees/search/:query', searchEmployee );


// Start the server
app.listen(process.env.PORT, () => {
  console.log("server is running on port 8000");
})