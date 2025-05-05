import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';

const services = [
  {
    title: "Dog Boarding",
    price: "From €18",
    period: "per night",
    description: "Cozy accommodation, offering spacious indoor-outdoor runs, heated if required and plenty of daily exercise.",
    features: [
      "Spacious indoor-outdoor runs",
      "Daily exercise sessions",
      "Regular monitoring",
      "Premium bedding provided (if required)",
      "Customized feeding schedule",
      "Playtime with other dogs (optional)",
    ],
    mainImage: "/images/services/dog-boarding-main.webp",
    images: [
      { src: "/images/services/dog-boarding-1.webp", alt: "Spacious dog boarding area" },
      { src: "/images/services/dog-boarding-2.webp", alt: "Dog play area" },
      { src: "/images/services/dog-boarding-3.webp", alt: "Indoor dog accommodation" }
    ]
  },
  {
    title: "Cat Boarding",
    price: "From €12",
    period: "per night",
    description: "Quiet and cozy cat condos with climbing spaces, window views, and plenty of love from our family of cat lovers.",
    features: [
      "Private cat condos",
      "Multi-level climbing spaces",
      "Window views",
      "Individual litter areas",
      "Quiet, peaceful environment",
      "Scratch posts and toys"
    ],
    mainImage: "/images/services/cat-boarding-main.webp",
    images: [
      { src: "/images/services/cat-boarding-1.webp", alt: "Luxury cat condo" },
      { src: "/images/services/cat-boarding-2.webp", alt: "Cat play area" },
      { src: "/images/services/cat-boarding-3.webp", alt: "Cat relaxation space" }
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