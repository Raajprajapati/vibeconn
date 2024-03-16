import React from 'react';
import '../styles/Notfound.css';
import { Link } from 'react-router-dom';
const Notfound = () => {
  // Not found pages catches all invalid routes
  return (
    <div className='notfound'>
        <h1>Oops page not found</h1>
        <Link to="/">Go to Home</Link>
    </div>
  )
}

export default Notfound;