import { FaHome, FaUserMd, FaTree, FaWindowMaximize } from 'react-icons/fa';
import { motion } from 'framer-motion';

const features = [
  {
    icon: FaHome,
    title: 'Spacious Accommodations',
    description: 'Comfortable, climate-controlled rooms designed for your pets comfort and safety.'
  },
  {
    icon: FaUserMd,
    title: '24/7 On-Call Vet',
    description: 'Round-the-clock veterinary access ensuring your pets health and well-being.'
  },
  {
    icon: FaTree,
    title: 'Indoor & Outdoor Areas',
    description: 'Large play areas and exercise zones for daily activities and socialization.'
  },
  {
    icon: FaWindowMaximize,
    title: 'Rooms with a View',
    description: 'Bright, airy spaces with windows offering natural light and outdoor views.'
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function Features() {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-red-600 mb-4">Why Choose Us</h2>
          <p className="text-xl text-gray-600">
            Experience premium pet care services tailored to your furry friend's needs
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-6"
            >
              <div className="flex flex-col items-center">
                <div className="mb-4">
                  <feature.icon className="text-red-600 text-4xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 