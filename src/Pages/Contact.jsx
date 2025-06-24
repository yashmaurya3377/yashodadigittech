import React, { useState } from 'react';
import { 
  FiMail, FiPhone, FiMessageSquare, FiUser, 
  FiSend, FiMapPin, FiClock, FiChevronDown,
  FiPaperclip, FiCheck, FiX, FiLoader
} from 'react-icons/fi';
import { FaWhatsapp, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    attachment: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [fileName, setFileName] = useState('');
  const fileInputRef = React.createRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        attachment: file
      }));
      setFileName(file.name);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({ success: false, message: 'Please fill all required fields' });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({ success: false, message: 'Please enter a valid email address' });
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus({ success: true, message: 'Your message has been sent successfully!' });
      setFormData({
        name: '',
        email: '',
        message: '',
        attachment: null
      });
      setFileName('');
    } catch (error) {
      setSubmitStatus({ success: false, message: 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const faqs = [
    {
      question: "What are your business hours?",
      answer: "Our team is available Monday through Friday from 9:00 AM to 6:00 PM. We're closed on weekends and major holidays."
    },
    {
      question: "How soon can I expect a response?",
      answer: "We typically respond to inquiries within 24 hours during business days. For urgent matters, please call our support line."
    },
    {
      question: "Do you offer emergency support?",
      answer: "Yes, we provide 24/7 emergency support for our premium clients. Standard support is available during business hours."
    }
  ];

  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Customer Support",
      email: "alex@example.com",
      phone: "+91 98765 43211"
    },
    {
      name: "Sarah Williams",
      role: "Sales Manager",
      email: "sarah@example.com",
      phone: "+91 98765 43212"
    },
    {
      name: "Michael Chen",
      role: "Technical Support",
      email: "michael@example.com",
      phone: "+91 98765 43213"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">Get in Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or want to discuss a project? We'd love to hear from you.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <FiMessageSquare className="mr-2 text-blue-600" />
              Contact Information
            </h3>

            <div className="space-y-5">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FiPhone className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Phone</h4>
                  <a 
                    href="tel:+919876543210" 
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FiMail className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Email</h4>
                  <a 
                    href="mailto:owner@example.com" 
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    owner@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FiMapPin className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Address</h4>
                  <p className="text-gray-600">
                    123 Business Street, Tech City, IN 560001
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FiClock className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Working Hours</h4>
                  <p className="text-gray-600">
                    Mon-Fri: 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Map */}
            <div className="mt-8">
              <h4 className="font-medium text-gray-700 mb-3">Our Location</h4>
              <div className="h-48 bg-gray-200 rounded-lg overflow-hidden relative">
                <iframe
                  title="Google Maps Location"
                  width="100%"
                  height="100%"
                  src="https://maps.google.com/maps?q=123%20Business%20Street,%20Tech%20City,%20IN%20560001&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="absolute top-0 left-0"
                ></iframe>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-8">
              <h4 className="font-medium text-gray-700 mb-3">Connect With Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-100 p-3 rounded-full text-green-600 hover:bg-green-200 transition-colors"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp size={20} />
                </a>
                <a 
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-100 p-3 rounded-full text-blue-600 hover:bg-blue-200 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={20} />
                </a>
                <a 
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-sky-100 p-3 rounded-full text-sky-600 hover:bg-sky-200 transition-colors"
                  aria-label="Twitter"
                >
                  <FaTwitter size={20} />
                </a>
                <a 
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-100 p-3 rounded-full text-indigo-600 hover:bg-indigo-200 transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebook size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <FiSend className="mr-2 text-blue-600" />
              Send Us a Message
            </h3>

            {submitStatus && (
              <div className={`mb-6 p-4 rounded-lg ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                <div className="flex items-center">
                  {submitStatus.success ? (
                    <FiCheck className="mr-2" />
                  ) : (
                    <FiX className="mr-2" />
                  )}
                  <span>{submitStatus.message}</span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiUser className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiMail className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  required
                />
              </div>

              <div>
                <label htmlFor="attachment" className="block text-sm font-medium text-gray-700 mb-1">
                  Attachment (Optional)
                </label>
                <div className="flex items-center">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current.click()}
                    className="flex items-center bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors"
                  >
                    <FiPaperclip className="mr-2" />
                    {fileName || 'Choose File'}
                  </button>
                  {fileName && (
                    <button
                      type="button"
                      onClick={() => {
                        setFileName('');
                        setFormData(prev => ({ ...prev, attachment: null }));
                      }}
                      className="ml-2 text-red-500 hover:text-red-700"
                    >
                      <FiX />
                    </button>
                  )}
                  <input
                    type="file"
                    id="attachment"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </div>
                {fileName && (
                  <p className="text-sm text-gray-500 mt-1">Selected: {fileName}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <FiLoader className="animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend className="mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Our Team</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl font-bold">
                  {member.name.charAt(0)}
                </div>
                <h4 className="text-xl font-medium text-gray-800">{member.name}</h4>
                <p className="text-blue-600 mb-3">{member.role}</p>
                <div className="space-y-2">
                  <a 
                    href={`mailto:${member.email}`} 
                    className="text-gray-600 hover:text-blue-600 transition-colors block"
                  >
                    {member.email}
                  </a>
                  <a 
                    href={`tel:${member.phone}`} 
                    className="text-gray-600 hover:text-blue-600 transition-colors block"
                  >
                    {member.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Frequently Asked Questions</h3>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b last:border-b-0">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-4 text-left font-medium text-gray-800 hover:bg-gray-50 transition-colors flex items-center justify-between"
                >
                  <span>{faq.question}</span>
                  <FiChevronDown className={`transition-transform ${activeAccordion === index ? 'transform rotate-180' : ''}`} />
                </button>
                <div className={`px-6 pb-4 pt-0 ${activeAccordion === index ? 'block' : 'hidden'}`}>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg p-8 text-white">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-3">Stay Updated</h3>
            <p className="mb-6 opacity-90">Subscribe to our newsletter for the latest news and updates.</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="bg-white text-blue-600 font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;