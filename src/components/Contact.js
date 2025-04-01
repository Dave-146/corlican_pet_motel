import { useState, useRef } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '');

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }));

    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        form.current,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: 'Message sent successfully!' }
      });

      // Reset form
      form.current.reset();

      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus({
          submitted: false,
          submitting: false,
          info: { error: false, msg: null }
        });
      }, 5000);

    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: 'An error occurred. Please try again later.' }
      });
    }
  };

  return (
    <section className="py-20 bg-gray-50" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display mb-4 text-gray-900">Contact Us</h2>
          <p className="text-xl text-gray-600">
            Get in touch with us for bookings or any questions you may have
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-primary text-white p-3 rounded-full">
                <FaPhone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display text-lg mb-1">Phone</h4>
                <p className="text-gray-600">Assumpta: +353 (86) 223 2100</p>
                <p className="text-gray-600">Mary: +353 (86) 355 1132</p>
                <p className="text-gray-600">Available 9am - 7pm daily</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary text-white p-3 rounded-full">
                <FaEnvelope className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display text-lg mb-1">Email</h4>
                <p className="text-gray-600">corlicanpetmotel@hotmail.com</p>
                <p className="text-gray-600">We usually respond within 24 hours</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary text-white p-3 rounded-full">
                <FaMapMarkerAlt className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display text-lg mb-1">Location</h4>
                <p className="text-gray-600">Corlican, Killurin,</p>
                <p className="text-gray-600">Enniscorthy, Wexford</p>
                <p className="text-gray-600">Y21 T6X5</p>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="h-[450px] rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4869.644998645482!2d-6.605476!3d52.391768!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4842a9d495061627%3A0x14f1f75e2a21c2f!2sCorlican%20Pet%20Motel!5e0!3m2!1sen!2sus!4v1743199366604!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Corlican Pet Motel Location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg h-full flex flex-col">
            <h3 className="text-2xl font-display mb-6">Send us a Message</h3>
            {status.info.msg && (
              <div className={`p-4 rounded-md mb-6 ${
                status.info.error ? 'bg-red-50 text-red-800' : 'bg-green-50 text-green-800'
              }`}>
                {status.info.msg}
              </div>
            )}
            <form ref={form} onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  required
                />
              </div>

              <div className="flex-1 flex flex-col">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="flex-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status.submitting}
                className={`btn-primary w-full ${status.submitting ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                {status.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 