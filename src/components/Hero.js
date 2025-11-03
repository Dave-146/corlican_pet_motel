import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const baseUrl = process.env.PUBLIC_URL || '';

const images = [
  {
    desktop: baseUrl + "/images/hero/entrance-mural.webp",
    mobile: baseUrl + "/images/hero/entrance-mural-mobile.webp",
    alt: 'Corlican Pet Motel entrance mural featuring colorful pet boarding facility in Wexford, Ireland with pets and trees',
    caption: 'Welcome to Corlican Pet Motel'
  },
  {
    desktop: baseUrl + "/images/hero/kennels-view.webp",
    mobile: baseUrl + "/images/hero/kennels-view-mobile.webp",
    alt: 'Spacious outdoor dog kennels and grassy exercise area at Corlican Pet Motel boarding facility in Wexford',
    caption: 'Spacious Outdoor Facilities'
  },
  {
    desktop: baseUrl + "/images/hero/signage.webp",
    mobile: baseUrl + "/images/hero/signage-mobile.webp",
    alt: 'Corlican Pet Motel Boarding Kennels professional signage for pet boarding services in Wexford, Ireland',
    caption: 'Professional Pet Boarding Services'
  }
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Preload all hero images immediately for smooth carousel transitions
  // This runs as early as possible, even before React fully renders
  useEffect(() => {
    // Use requestIdleCallback if available, otherwise load immediately
    const preloadImages = () => {
      images.forEach((img) => {
        // Preload desktop version
        const desktopImg = new Image();
        desktopImg.src = img.desktop;
        desktopImg.loading = 'eager';
        
        // Preload mobile version
        const mobileImg = new Image();
        mobileImg.src = img.mobile;
        mobileImg.loading = 'eager';
      });
    };
    
    if ('requestIdleCallback' in window) {
      requestIdleCallback(preloadImages, { timeout: 2000 });
    } else {
      // Fallback for browsers without requestIdleCallback
      setTimeout(preloadImages, 0);
    }
  }, []);

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
              opacity: { duration: 0.8, ease: [0.4, 0, 0.6, 1] }
            }}
            className="absolute inset-0"
          >
            <img
              src={images[currentImageIndex].desktop}
              srcSet={`${images[currentImageIndex].mobile} 800w, ${images[currentImageIndex].desktop} 1200w`}
              sizes="100vw"
              alt={images[currentImageIndex].alt}
              className="object-cover object-center w-full h-full"
              loading="eager"
              fetchPriority={currentImageIndex === 0 ? "high" : "auto"}
              decoding="async"
              width="1200"
              height="675"
            />
            <div className="absolute inset-0 bg-black/30" />
          </motion.div>
        </AnimatePresence>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
          <div className="max-w-4xl w-full">
            <div className="flex flex-col items-center justify-center space-y-6 md:space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <img 
                  src={process.env.PUBLIC_URL + "/logo.svg"} 
                  alt="Corlican Pet Motel" 
                  className="h-60 md:h-80 w-auto mx-auto"
                />
              </motion.div>
              <div className="flex flex-col items-center">
                <motion.h1
                  key={`title-${currentImageIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="text-4xl md:text-6xl font-display font-bold text-white text-shadow mb-4 md:mb-8"
                >
                  {images[currentImageIndex].caption}
                </motion.h1>
                <motion.p
                  key={`desc-${currentImageIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="text-xl md:text-2xl font-sans text-white text-shadow"
                >
                  Purpose built boarding for your beloved pets in a safe and caring environment
                </motion.p>
              </div>
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