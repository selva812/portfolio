import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { FaGithub, FaEnvelope, FaPhone, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Replace with your actual API endpoint
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <motion.div 
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={container}
      className="max-w-6xl mx-auto px-4 sm:px-6 py-12 bg-white"
    >
      <motion.h2 
        variants={item}
        className="text-3xl font-bold mb-12 text-center text-gray-900 relative"
      >
        <span className="relative z-10 px-4 bg-white">Get In Touch</span>
        <span className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent -z-0"></span>
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div variants={item}>
          <motion.h3 
            className="text-xl font-semibold mb-6 text-gray-900"
            whileHover={{ x: 3 }}
          >
            Contact Information
          </motion.h3>
          
          <div className="space-y-6">
            {[
              {
                icon: <FaEnvelope className="text-blue-600" size={20} />,
                title: "Email",
                content: "selva8121999@gmail.com",
                href: "mailto:selva8121999@gmail.com"
              },
              {
                icon: <FaPhone className="text-blue-600" size={20} />,
                title: "Phone",
                content: "+91 9943882575",
                href: "tel:+919943882575"
              },
              {
                icon: <FaGithub className="text-blue-600" size={20} />,
                title: "GitHub",
                content: "github.com/selva812",
                href: "https://github.com/selva812"
              },
              {
                icon: <FaLinkedin className="text-blue-600" size={20} />,
                title: "LinkedIn",
                content: "linkedin.com/in/selva-kumar",
                href: "https://linkedin.com/in/selva-kumar"
              },
              {
                icon: <FaMapMarkerAlt className="text-blue-600" size={20} />,
                title: "Address",
                content: "63/Yegova Illam, Ramaiaha 4th Cross Street, Jaihindpuram, Madurai-625011"
              }
            ].map((contact, index) => (
              <motion.a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={item}
                whileHover={{ x: 5 }}
                className="flex items-start p-4 rounded-xl border border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="p-3 mr-4 bg-blue-100 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {contact.icon}
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                    {contact.title}
                  </h4>
                  <p className="text-gray-600">{contact.content}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div variants={item}>
          <motion.h3 
            className="text-xl font-semibold mb-6 text-gray-900"
            whileHover={{ x: 3 }}
          >
            Send Me a Message
          </motion.h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div variants={item}>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Your Name"
                required
              />
            </motion.div>

            <motion.div variants={item}>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Your Email"
                required
              />
            </motion.div>

            <motion.div variants={item}>
              <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-700">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Subject"
                required
              />
            </motion.div>

            <motion.div variants={item}>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Your Message"
                required
              ></textarea>
            </motion.div>

            <motion.div variants={item}>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg shadow-md hover:shadow-lg transition-all font-medium"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </motion.div>

            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-100 text-green-700 rounded-lg"
              >
                Message sent successfully!
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-100 text-red-700 rounded-lg"
              >
                Failed to send message. Please try again.
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactSection;