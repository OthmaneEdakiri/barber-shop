import { createContext, useEffect, useRef } from 'react';
import './App.css';
import { Hero, Navbar, Main, Bar, About, Featured, Services, Booking, Pricing, Contact, Footer } from './components';
import { useState } from 'react';

// Creating context for toggling and sections.
export const ToggleContext = createContext();
export const SectionsContext = createContext();

function App() {
  // State to track the active link.
  const [linkActive, setLinkActive] = useState('home');

  // State to handle the toggle status.
  const [toggle, setToggle] = useState(false);

  // Refs for each section in the application.
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    services: useRef(null),
    pricing: useRef(null),
    contact: useRef(null),
  };

  // Effect to handle scroll events and update the active link.
  useEffect(() => {
    const handleScroll = () => {
      // Loop through section refs and check if they are in the viewport.
      Object.entries(sectionRefs).forEach(([sectionId, ref]) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          if (window.innerHeight > rect.top) {
            setLinkActive(sectionId);
          }
        }
      });
    };

    // Add scroll and load event listeners.
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleScroll);

    // Cleanup by removing event listeners when the component unmounts.
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('load', handleScroll);
    };

  }, []); // Empty dependency array ensures the effect runs only once.

  return (
    <>
      {/* Providing toggle and linkActive values through context to Navbar and Bar components. */}
      <ToggleContext.Provider value={{ toggle, setToggle, linkActive }}>
        <Navbar />
        <Bar />
      </ToggleContext.Provider>

      {/* Providing sectionRefs through context to components within Main. */}
      <SectionsContext.Provider value={{ sectionRefs }}>
        <Main>
          {/* Rendering various components including Hero, About, Featured, etc. */}
          <Hero />
          <About />
          <Featured />
          <Services />
          <Booking />
          <Pricing />
          <Contact />
          <Footer />
        </Main>
      </SectionsContext.Provider>
    </>
  );
}

export default App;
