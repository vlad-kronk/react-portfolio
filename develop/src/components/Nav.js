import React, { useState, useEffect } from 'react';
import '../styles/Nav.css';
import { BsList } from 'react-icons/bs';

export default function Nav() {

   const navOptions = [
      { id: 0, value: 'about me' },
      { id: 1, value: 'portfolio' },
      { id: 2, value: 'contact' },
      { id: 3, value: 'resume' }
   ];

   return (
      <div className='navbar p-0 m-0'>
         {navOptions.map(option =>
            <a className='text-decoration-none text-reset' key={option.id} href='#'>{option.value}</a>
         )}
         {/* <a href="#" className="icon">
            <BsList className='list-icon' />
         </a> */}
      </div>
   )
}