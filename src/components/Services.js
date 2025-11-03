import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';

const baseUrl = process.env.PUBLIC_URL || '';

const services = [
  {
    title: "Dog Boarding",
    price: "From €18",
    period: "per night",
    description: "Cozy accommodation, offering spacious indoor-outdoor runs, heated if required and plenty of daily exercise.",
    prices: {
      "1 dog": "€18",
      "2 dogs": "€30",
      "3 dogs": "€40",
      "Dog and cat": "€28",
      "Daycare": "€15"
    },
    features: [
      "Spacious indoor-outdoor runs",
      "Daily exercise sessions",
      "Regular monitoring",
      "Premium bedding provided (if required)",
      "Customized feeding schedule",
      "Playtime with other dogs (optional)",
    ],
    mainImage: baseUrl + "/images/services/Dog_1.webp",
    mainImageMobile: baseUrl + "/images/services/Dog_1-mobile.webp",
    images: [
      { desktop: baseUrl + "/images/services/Dog_1.webp", mobile: baseUrl + "/images/services/Dog_1-mobile.webp", alt: "Dog enjoying boarding facility 1" },
      { desktop: baseUrl + "/images/services/Dog_2.webp", mobile: baseUrl + "/images/services/Dog_2-mobile.webp", alt: "Dog enjoying boarding facility 2" },
      { desktop: baseUrl + "/images/services/Dog_3.webp", mobile: baseUrl + "/images/services/Dog_3-mobile.webp", alt: "Dog enjoying boarding facility 3" },
      { desktop: baseUrl + "/images/services/Dog_4.webp", mobile: baseUrl + "/images/services/Dog_4-mobile.webp", alt: "Dog enjoying boarding facility 4" },
      { desktop: baseUrl + "/images/services/Dog_5.webp", mobile: baseUrl + "/images/services/Dog_5-mobile.webp", alt: "Dog enjoying boarding facility 5" }
    ]
  },
  {
    title: "Cat Boarding",
    price: "From €12",
    period: "per night",
    description: "Quiet and cozy cat condos with climbing spaces, window views, and plenty of love from our family of cat lovers.",
    prices: {
      "1 cat": "€12",
      "2 cats": "€20",
      "Dog and cat": "€28",
      "2 dogs and 1 cat": "€40",
      "1 dog and 2 cats": "€36",
      "Daycare": "€15"
    },
    features: [
      "Private cat condos",
      "Multi-level climbing spaces",
      "Window views",
      "Individual litter areas",
      "Quiet, peaceful environment",
      "Scratch posts and toys"
    ],
    mainImage: baseUrl + "/images/services/Cat_1.webp",
    mainImageMobile: baseUrl + "/images/services/Cat_1-mobile.webp",
    images: [
      { desktop: baseUrl + "/images/services/Cat_1.webp", mobile: baseUrl + "/images/services/Cat_1-mobile.webp", alt: "Cat enjoying boarding facility 1" },
      { desktop: baseUrl + "/images/services/Cat_2.webp", mobile: baseUrl + "/images/services/Cat_2-mobile.webp", alt: "Cat enjoying boarding facility 2" },
      { desktop: baseUrl + "/images/services/Cat_3.webp", mobile: baseUrl + "/images/services/Cat_3-mobile.webp", alt: "Cat enjoying boarding facility 3" },
      { desktop: baseUrl + "/images/services/Cat_4.webp", mobile: baseUrl + "/images/services/Cat_4-mobile.webp", alt: "Cat enjoying boarding facility 4" },
      { desktop: baseUrl + "/images/services/Cat_5.webp", mobile: baseUrl + "/images/services/Cat_5-mobile.webp", alt: "Cat enjoying boarding facility 5" }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export default function Services() {
  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-display mb-4 text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Choose the perfect accommodation for your beloved pet
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={itemVariants}>
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 