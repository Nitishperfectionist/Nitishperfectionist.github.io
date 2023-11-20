// import React from 'react';

// import Navbar from './Component/Navbar';
// import Home from './Pages/Home';
// import About from './Pages/About';
// import Skills from './Pages/Skills';
// import Projects from './Pages/Projects';
// import GitHubSubmission from './Pages/GitHubSubmission';
// import Contacts from './Pages/Contacts';

// function App() {
//   return (
//     <>
//       <Home />
//       <About/>
//       <Skills/>
//       <Projects/>
//       <GitHubSubmission/>
//       <Contacts/>
//       <Navbar />
//     </>
//   );
// }

// export default App;
import React, { useState } from 'react';
import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import GitHubSubmission from './Pages/GitHubSubmission';
import Contacts from './Pages/Contacts';
import DrawerChakra from './Pages/DrawerChakra';

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const yourLinksArray = [
    { id: 'home', title: 'Home', className: 'nav-link home' },
    { id: 'about', title: 'About', className: 'nav-link about' },
    { id: 'skills', title: 'Skills', className: 'nav-link skills' },
    { id: 'projects', title: 'Projects', className: 'nav-link projects' },
    { id: 'contact', title: 'Contacts', className: 'nav-link contact' },
  ];

  return (
    <>
      <Navbar closeMenu={toggleMenu} />
      <Home />
      <About />
      <Skills />
      <Projects />
      <GitHubSubmission />
      <Contacts />
      <DrawerChakra links={yourLinksArray} closeMenu={toggleMenu} />
    </>
  );
}

export default App;
