import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import emailjs from '@emailjs/browser';
import './App.css';

function App() {
  useEffect(() => {
    // Initialize EmailJS with verification
    try {
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
      if (!publicKey) {
        if (process.env.NODE_ENV === 'development') {
          console.error('EmailJS Public Key is missing!');
        }
        return;
      }
      
      emailjs.init(publicKey);
      
      // Only log success in development
      if (process.env.NODE_ENV === 'development') {
        console.log('EmailJS Initialized Successfully');
      }
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('EmailJS Initialization Error:', error);
      }
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <Services />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App; 