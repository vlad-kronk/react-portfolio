import React from 'react';
import '../../styles/AboutMe.css';
import AvatarImg from '../../styles/assets/AvatarMaker.svg'

export default function AboutMe() {
   return (
      <div className="about-me-container">
         <img className='avatar' src={AvatarImg}></img>
         <p className='bio'>
            I am a full stack web developer based in Redmond,
            Washington. I completed a web development bootcamp at the
            University of Washington and have coding and digital
            design experience spanning several years. I am versed in
            the <span>MERN</span> stack and am working towards
            mastery of others including <span>Ruby on Rails</span> and <span>LAMP</span>. I
            enjoy spending time with friends, playing jazz piano, videogames,
            and cooking.<br /><br />I hope to continue my education
            and work towards a degree in cybersecurity. Thank you
            for visiting my page!
         </p>
      </div>
   )
}