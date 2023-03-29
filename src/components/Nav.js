// import React, { useState, useEffect } from 'react';
import '../styles/Nav.css';
// import { FaList } from 'react-icons/fa';

// destructure props into usable variables
export default function Nav({ currentPage, handlePageChange }) {

   const navOptions = [
      {
         key: 0,
         value: 'about'
      },
      {
         key: 1,
         value: 'portfolio'
      },
      {
         key: 2,
         value: 'contact'
      },
      {
         key: 3,
         value: 'resume'
      },
   ];

   return (
      <div className='navbar'>
         {navOptions.map(option =>
            <a
               key={option.key}
               href={'#' + option.value}
               onClick={() => handlePageChange(option.value)}
               className={currentPage === option.value ? 'navbar-link active' : 'navbar-link'}
            >
               {option.value}
            </a>
         )}
         {/* <a href="#" className="icon">
            <BsList className='list-icon' />
         </a> */}
      </div>
   )
}