import React, { useState } from 'react';
import '../styles/EmployeeCard.css';
import { toast } from 'react-toastify';

const EmployeeCard = ({ employee, deleteUser }) => {
    const [empData, setEmpData] = useState(employee);
    const [isChanged, setIsChanged] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editedEmployee, setEditedEmployee] = useState(employee);
    const _id = employee._id;

    // handle editing data of employees
    const handleInputChange = (e) => {
        setIsChanged(true);
        const { name, value } = e.target;
        setEditedEmployee({ ...editedEmployee, [name]: value });
    };

    // toggle the editing functionality
    const handleEdit = () => {
        setIsEditing(true);
    };

    // cancel the editing
    const cancelEdit = () => {
        setIsEditing(false);
        setEditedEmployee(employee);
    }

    // function to save the edited changes into databse
    const saveChanges = async () => {
        try {
            editedEmployee.name = editedEmployee.name.toLowerCase();
            const res = await fetch(`${import.meta.env.VITE_HOST}/employees/${_id}`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(editedEmployee)
            });
            const jsonResponse = await res.json();
            console.log(jsonResponse)
            if (jsonResponse.success) {
                setEmpData(editedEmployee);
                setIsEditing(false);
                setEditedEmployee(editedEmployee);
                toast.success("Changes saved successfully.");
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
        <>
            <div className="employee_card">
                {isEditing ? (
                    <div className='card_inner'>
                        <input
                            type="text"
                            name="name"
                            placeholder='Employee Name'
                            value={editedEmployee.name}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            name="id"
                            value={editedEmployee.id}
                            placeholder='Employee Id'
                            readOnly
                        />
                        <input
                            type="text"
                            name="position"
                            placeholder='Position'
                            value={editedEmployee.position}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            name="salary"
                            placeholder='Salary'
                            value={editedEmployee.salary}
                            onChange={handleInputChange}
                            min={0}
                        />
                        <div className='btns'>
                            <button onClick={saveChanges} className='green' disabled={!isChanged}>Save</button>
                            <button onClick={cancelEdit} className='red'>Cancel</button>
                        </div>
                    </div>
                ) : (
                    <div className='card_inner'>
                        <p><b>Name:</b> {empData.name}</p>
                        <p><b>Employee ID:</b> {empData.id}</p>
                        <p><b>Position:</b> {empData.position}</p>
                        <p><b>Monthly Salary: </b> &#8377; {empData.salary}</p>
                        <div className='btns'>
                            <button onClick={handleEdit} className='green'>Edit</button>
                            <button onClick={() => deleteUser(empData._id)} className='red'>Delete</button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default EmployeeCard;
