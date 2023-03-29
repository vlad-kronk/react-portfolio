import React from 'react';
import '../../styles/Portfolio.css';

export default function Portfolio() {

   const cards = [
      {
         title: 'Ro-Sham-boTS',
         description: 'Team building game based on a \'guess my rule\' style. Users can join chat rooms and work together to figure out the bots\' rules to consistently beat it.',
         repoLink: 'https://github.com/vlad-kronk/beat-the-bots',
         deployedLink: 'https://beat-the-bots.herokuapp.com/',
         cardImg: '/images/Ro-Sham-boTS.png'
      },
      {
         title: 'Just Another Text Editor',
         description: 'This project allows developers to draft code fragments and notes offline using a progressive web application. IndexedDB is utilized to save the user\'s notes for when they\'re back online. This project also uses Webpack and service workers to cache the site data for offline use.',
         repoLink: 'https://github.com/vlad-kronk/pwa-text-editor',
         deployedLink: 'https://js-text-editor-pwa.herokuapp.com/',
         cardImg: '/images/JATE.png',
      },
      {
         title: 'README Generator',
         description: 'Console application that generates a professionally styled README markdown file based on a user\'s input. Developers can focus on the content of the readme without worrying about styling and formatting the markdown document.',
         repoLink: 'https://github.com/vlad-kronk/readme-generator',
         cardImg: '/images/readmegen.png'
      },
      {
         title: 'Weather Forecast Dashboard',
         description: 'This simple weather app provides the user with today\'s weather as well as a 5-day forecast for any city within Open Weather Map\'s 200,000+ city database. It handles error statuses and gives the user visual feedback.',
         repoLink: 'https://github.com/vlad-kronk/weather-dashboard',
         deployedLink: 'https://vlad-kronk.github.io/weather-dashboard/',
         cardImg: '/images/weather.png'
      },
      {
         title: 'Goalie',
         description: 'Application to share and view goals with peers using Chart.js to be able to vizualize the data. Live deployed on Heroku.',
         repoLink: 'https://github.com/vlad-kronk/your-goals-tracker',
         deployedLink: 'https://goalie.herokuapp.com/',
         cardImg: '/images/goalie.png'
      },
      {
         title: 'Code quiz',
         description: 'This project was my first from-scratch web app. It helped me better understand the fundamentals of web design: how to allow the structure, style, and interactivity to work together to create a viable product. This project is a short, timed, multiple-choice quiz that locally saves the users\' scores.',
         repoLink: 'https://github.com/vlad-kronk/code-quiz',
         deployedLink: 'https://vlad-kronk.github.io/code-quiz/',
         cardImg: '/images/quiz.png'
      }
   ]

   return (
      <div className='portfolio-container'>
         {cards.map((card, i) => (
            <div className='card-container' key={i}>
               <img src={card.cardImg} />
               <h2>{card.title}</h2>
               <p>{card.description}</p>
               <br />
               <a href={card.repoLink}>Repo</a>
               {card.deployedLink && <a href={card.deployedLink}>Deployed</a>}
            </div>
         ))
         }
      </div >
   )
}