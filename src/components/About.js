import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const images = [
  {
    src: "/images/about/about-1.webp",
    alt: "Corlican Pet Motel exterior"
  },
  {
    src: "/images/about/about-2.webp",
    alt: "Pet play area"
  },
  {
    src: "/images/about/about-3.webp",
    alt: "Staff with pets"
  }
];

export default function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-display mb-6 text-gray-900">
              Welcome to Corlican Pet Motel
            </h2>
            <div className="space-y-6 text-gray-600">
              <p>
                Since 2006, Corlican Pet Motel has been providing exceptional care and comfort for pets in Wexford. 
                Our family-owned facility combines professional expertise with a warm, welcoming environment to ensure 
                your beloved pets feel right at home.
              </p>
              <p>
                We understand that leaving your pet can be difficult, which is why we've created a home away from home 
                where your pets receive the same love and attention they get at home. We are dedicated 
                to providing personalized care for each guest.
              </p>
              <p>
                As a full time boarding kennel and cattery we find that it is important to look after the mental as well 
                as the physical side of your pet's well being. Kindness, a bit of play,and sometimes just a 
                good scratch behind the ear does the job but whatever it takes, we do it!
              </p>
            </div>
          </motion.div>

          {/* Image Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-[500px] rounded-lg overflow-hidden shadow-lg"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <img
                  src={images[currentImageIndex].src}
                  alt={images[currentImageIndex].alt}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </AnimatePresence>

            {/* Carousel Controls */}
            <div className="absolute inset-0 flex items-center justify-between p-4">
              <button
                onClick={prevImage}
                className="bg-black/50 hover:bg-primary text-white p-2 rounded-full transition-colors"
              >
                <FaChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="bg-black/50 hover:bg-primary text-white p-2 rounded-full transition-colors"
              >
                <FaChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Carousel Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    idx === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 