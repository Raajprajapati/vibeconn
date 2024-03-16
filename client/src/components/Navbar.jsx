import React from 'react';
import '../styles/Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="heading">
                <h1>Employee management system</h1>
            </div>
            <ul>
                <li><NavLink to="/"> Add Employee</NavLink></li>
                <li><NavLink to="/employees"> Employees</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar