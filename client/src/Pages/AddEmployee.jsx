import React, { useState } from 'react';
import '../styles/AddEmployee.css';
import { toast } from 'react-toastify';
const AddEmployee = () => {

    const [employeeName, setEmployeeName] = useState('');
    const [employeeID, setEmployeeID] = useState(0);
    const [salary, setSalary] = useState(0);
    const [position, setPosition] = useState('');

    // function to save employee into database
    const saveEmployee = async (event) => {
        try {
            event.preventDefault();
            const res = await fetch(`${import.meta.env.VITE_HOST}/employees`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id:employeeID,
                    name:employeeName.toLowerCase(),
                    salary,
                    position
                })
            });
            const jsonResponse = await res.json();
            if (jsonResponse.success) {
                toast.success(jsonResponse.message);
                setEmployeeID(null);
                setEmployeeName('');
                setPosition('');
                setSalary(null);
            }
            else {
                toast.error(jsonResponse.message);
            }
        }
        catch (error) {
            toast.error(error.message);
        }
    }

    return (
        <div className='create_emp'>
            <h1>Add Employee Details </h1>
            <form onSubmit={saveEmployee}>
                <input
                    type="text"
                    value={employeeName}
                    placeholder='Employee name'
                    required
                    onChange={(e) => setEmployeeName(e.target.value)}
                />

                <input
                    type="number"
                    value={employeeID? employeeID: ''}
                    placeholder='Employee ID'
                    required
                    onChange={(e) => setEmployeeID(e.target.value)}
                    min={1}
                />

                <input
                    type="text"
                    value={position}
                    placeholder='Position'
                    required
                    onChange={(e) => setPosition(e.target.value)}
                />

                <input
                    type="number"
                    value={salary? salary:''}
                    placeholder='Monthly Salary (&#8377;)'
                    required
                    onChange={(e) => setSalary(e.target.value)}
                    min={0}
                />

                <button type='submit'>Add to Database</button>
            </form>
        </div>
    )
}

export default AddEmployee;