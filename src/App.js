import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Services from './components/Services';
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
        console.error('EmailJS Public Key is missing!');
        return;
      }
      
      emailjs.init(publicKey);
      console.log('EmailJS Initialized Successfully');
      
      // Verify environment variables are loaded
      console.log('Environment Variables Check:', {
        hasServiceId: !!process.env.REACT_APP_EMAILJS_SERVICE_ID,
        hasTemplateId: !!process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        hasPublicKey: !!process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      });
    } catch (error) {
      console.error('EmailJS Initialization Error:', error);
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Features />
      <Services />
      <Contact />
      <Footer />
      <main>
        {/* Other components will be added here */}
      </main>
    </div>
  );
}

export default App; 