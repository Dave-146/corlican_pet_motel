import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  {
    src: process.env.PUBLIC_URL + "/images/hero/entrance-mural.webp",
    alt: 'Corlican Pet Motel entrance with charming mural featuring pets and trees',
    caption: 'Welcome to Corlican Pet Motel'
  },
  {
    src: process.env.PUBLIC_URL + "/images/hero/kennels-view.webp",
    alt: 'Spacious outdoor kennels with grassy exercise area',
    caption: 'Spacious Outdoor Facilities'
  },
  {
    src: process.env.PUBLIC_URL + "/images/hero/signage.webp",
    alt: 'Corlican Pet Motel Boarding Kennels sign',
    caption: 'Professional Pet Boarding Services'
  }
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[100vh] w-full overflow-hidden bg-black">
      {/* Image Carousel */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 2, ease: [0.4, 0, 0.6, 1] }
            }}
            className="absolute inset-0"
          >
            <img
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              className="object-cover object-center w-full h-full"
            />
            <div className="absolute inset-0 bg-black/30" />
          </motion.div>
        </AnimatePresence>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
          <div className="max-w-4xl w-full">
            <div className="relative h-[500px] flex flex-col items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="absolute top-8"
              >
                <img 
                  src={process.env.PUBLIC_URL + "/logo.svg"} 
                  alt="Corlican Pet Motel" 
                  className="h-60 md:h-80 w-auto mx-auto"
                />
              </motion.div>
              <motion.h1
                key={`title-${currentImageIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-4xl md:text-6xl font-display font-bold mb-6 text-white text-shadow absolute top-[60%]"
              >
                {images[currentImageIndex].caption}
              </motion.h1>
              <motion.p
                key={`desc-${currentImageIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-xl md:text-2xl mb-8 font-sans text-white text-shadow absolute bottom-0"
              >
                Luxury boarding for your beloved pets in a safe and caring environment
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="mt-8"
            >
              <a
                href="#services"
                className="btn-primary inline-block"
              >
                View Our Services
              </a>
            </motion.div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-500 ${
                index === currentImageIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 