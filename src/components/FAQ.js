import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  {
    question: "What are your opening hours for drop-off and pick-up?",
    answer: "We are open for drop-off and pick-up by appointment from 9:00 AM to 6:00 PM Monday through Saturday. Sunday is strictly at 12pm or 6pm only. We recommend calling ahead to arrange your pet's arrival time to ensure we can give them a proper welcome."
  },
  {
    question: "Can we visit your kennels before boarding?",
    answer: "Yes, we allow visitors to come and see our facility before boarding with us. Please call ahead to arrange your visit."
  },
  {
    question: "Do you provide food for the pets during their stay?",
    answer: "We provide premium quality food. We can accommodate special dietary requirements if provided."
  },
  {
    question: "Does my pet need to be vaccinated?",
    answer: "Dogs need to be fully vaccinated including kennel cough. All vaccinations must be current and we require proof from your veterinarian."
  },
  {
    question: "Can I bring my pet's favorite toys and bedding?",
    answer: "Absolutely! We encourage you to bring familiar items like toys, blankets, or bedding to help your pet feel more comfortable during their stay. We also provide clean bedding if needed."
  },
  {
    question: "What happens if my pet gets sick during their stay?",
    answer: "We have 24/7 access to veterinary care. If your pet shows any signs of illness, we will contact you first and consult with our veterinarian if needed. We also will have your emergency contact information on file."
  },
  {
    question: "Can multiple pets from the same family stay together?",
    answer: "Yes! We offer special rates for multiple pets from the same family. We have spacious runs that can accommodate multiple dogs. We also can accommodate multiple cats in a single pen."
  },

];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-display mb-4 text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Everything you need to know about boarding your pet with us
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
              >
                <h3 className="text-lg font-display font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <FaChevronDown 
                  className={`w-5 h-5 text-gray-600 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 bg-white">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
} 