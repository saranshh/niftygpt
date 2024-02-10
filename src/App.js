import React from 'react'
import Featured from './components/Featured'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import Footer from './components/Footer'
import Services from './components/Services'
import Testimonial from './components/Testimonial' 

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      <Services />
      <Signup />
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;
