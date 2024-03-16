import React, { useState, useEffect } from 'react';
import EmployeeCard from '../components/EmployeeCard';
import { toast } from 'react-toastify';
import Search from '../components/Search';

const Employees = () => {
    const [empData, setEmpData] = useState([]);

    // function to fetch the data from the server
    const fetchData = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_HOST}/employees`);
            const data = await response.json();
            setEmpData([]);

            if(data.success){
                setEmpData(data.employees)
            }

        } catch (error) {
            toast.error("Error occured while fetching data");
        }
    }

    // function to filter the deleted employee data after deletion 
    const filter = (arr,id)=>{
        setEmpData(arr.filter((val)=>{
            return val._id !==id;
        }))
    }

    // delete a user by given id
    const deleteUser = async (id) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_HOST}/employees/${id}`, { method: 'DELETE' });
            const jsonResponse = await response.json();
            if (jsonResponse.success) {
                filter(empData, id)
            }else{
                toast.error(jsonResponse.message);
            }
        } catch (error) {
            toast.error("Error occured while deleting user.");
        }
    }
    
    // fetch data on initial rendering
    useEffect(() => {
        fetchData();
    }, [])

    return (

        <div className='employee_wrapper'>
            <Search setEmpData={setEmpData} fetchData={fetchData}/>
            {empData.length > 0 ? empData.map((val) => {
                return <EmployeeCard employee={val} key={val._id} deleteUser={deleteUser}/>
            }
            
            ): <p>No Employee data found.</p>}
        </div>
    )
}

export default Employees;