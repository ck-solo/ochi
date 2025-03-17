import React from 'react';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Marque from './components/Marque';
import About from './components/About';
import Eyes from './components/Eyes';
import Feature from './components/Feature';
import Cards from './components/Cards'; 
import Eyesecond from './components/Eyesecond';
import Footer from './components/Footer';
import LocomotiveScroll from 'locomotive-scroll';

function App() {

const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full h-screen bg-zinc-100'>
      <Navbar />
      <Landing />
      <Marque />
      <About />
      <Eyes />
    <Feature />
    <Cards />
    <Eyesecond />
    <Footer /> 

    </div>
  )
}

export default App