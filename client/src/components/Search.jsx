import React, { useState } from 'react';
import '../styles/Search.css'
import { toast } from 'react-toastify';
import { RiSearchEyeLine } from "react-icons/ri";
import { MdOutlineClear } from "react-icons/md";

const Search = ({setEmpData, fetchData}) => {
    const [query, setQuery] = useState('');
    const [isclearActive, setClear] = useState(false);

    // handles the clear search functionality
    const handleClear = ()=>{
        setClear(false);
        setQuery('');
        fetchData();
    }

    // handles the serach query
    const handleSubmit = async (event) => {
        try {
            setClear(true)
            event.preventDefault();
            const res = await fetch(`${import.meta.env.VITE_HOST}/employees/search/${query.toLowerCase()}`);
            const data = await res.json();
            if (data.success) {
                setEmpData(data.employees);
            } else {
                toast.error("No such employee found");
            }
        } catch (error) {
            toast.error("Some error occured");
        }
    }

    return (
        <>
            <div className='search'>
                <h1>Find an employee's data</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="search"
                        placeholder='Search by employee name or id'
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        required
                    />
                    <button type='submit'> <RiSearchEyeLine /></button>
                {isclearActive && <button type='button' onClick={handleClear} className='red'> <MdOutlineClear /></button>}
                </form>
            </div>
        </>
    )
}

export default Search