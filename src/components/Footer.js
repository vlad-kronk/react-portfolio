import React from 'react';
import '../styles/Footer.css';
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';

export default function Footer() {
  return (
    <div>
      <div className='footer-flex'>
        <a className='footer-link' href="#"><FaGithub size='30' /></a>
        <a className='footer-link' href="#"><FaLinkedin size='30' /></a>
        <a className='footer-link' href="#"><FaStackOverflow size='30' /></a>
      </div>
    </div>
  )
}