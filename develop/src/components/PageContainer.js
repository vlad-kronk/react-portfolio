import React, { useState } from 'react';
import Nav from './Nav';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';


export default function PageContainer() {
   const [currentPage, setCurrentPage] = useState('about me')

   // render components based on the current page saved in state
   const renderPage = () => {
      switch (currentPage) {
         case 'resume':
            return <Resume />
         case 'portfolio':
            return <Portfolio />
         case 'contact':
            return <Contact />
         default:
            return <AboutMe />
      }
   }

   const handlePageChange = (page) => setCurrentPage(page);

   return (
      <div>
         <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
         {renderPage()}
      </div>
   )

}