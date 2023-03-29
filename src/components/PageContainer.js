import React, { useState } from 'react';
import Nav from './Nav';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';


export default function PageContainer() {
   const [currentPage, setCurrentPage] = useState(window.location.hash.substring(1) || 'about')

   // render components based on the current page saved in state
   const renderPage = () => {
      switch (currentPage) {
         case 'resume':
            return <Resume />
         case 'portfolio':
            return <Portfolio />
         case 'contact':
            return <Contact />
         case 'about':
            return <AboutMe />
      }
   }

   const handlePageChange = (page) => setCurrentPage(page);

   return (
      <div>
         {/* send in state as props */}
         <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
         {/* render current page based on state */}
         {renderPage()}
      </div>
   )

}