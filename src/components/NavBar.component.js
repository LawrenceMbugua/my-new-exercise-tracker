//import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"

 const Navbar = () => {
    
     return (
         <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
             <Link to='/' className='navbar-brand'>ExerciseTracker</Link>
             <div className="collapse navbar-collapse">

                 <ul className='navbar-nav mr-auto'>
                        
                     <li className='navbar-item'>
                         <Link to='/' className='nav-link'>Exercises</Link>
                     </li>

                     <li className='navbar-item'>
                         <Link to='/create' className='nav-link'>Create Exersise Log</Link>
                     </li>

                     <li className='navbar-item'>
                         <Link to='/user' className='nav-link'>Create User</Link>
                     </li>

                     <li className='navbar-item'>
                         <Link to='/test' className='nav-link'>Test component</Link>
                     </li>
                        
                     {/* {NORMAL LINKS (<a></a>) ARE REPLACED BY 
                            <Link> </Link>} */}
                 </ul>
             </div>
         </nav>

     );
     
}

export default Navbar;
