import React from 'react';
import { FaArrowRight, FaChartLine, FaLightbulb, FaHandshake, FaCode, FaMobile, FaPalette } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8 }
  }
};

const slideInLeft = {
  hidden: { 
    x: -50,
    opacity: 0 
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 14
    }
  }
};

const HomePage = () => {
  const featuredServices = [
    {
      title: "Web Development",
      description: "Custom web applications built with modern technologies for optimal performance.",
      icon: <FaChartLine className="text-3xl text-blue-600" />
    },
    {
      title: "Mobile Apps",
      description: "Cross-platform mobile solutions for iOS and Android.",
      icon: <FaLightbulb className="text-3xl text-blue-600" />
    },
    {
      title: "UI/UX Design",
      description: "Beautiful interfaces that enhance user engagement.",
      icon: <FaHandshake className="text-3xl text-blue-600" />
    }
  ];

  const stats = [
    { value: "25+", label: "Projects Completed" },
    { value: "15+", label: "Happy Clients" },
    { value: "5+", label: "Years Experience" }
  ];

  const featuredProjects = [
    {
      title: "E-commerce Platform",
      description: "A full-featured online store with payment integration and inventory management.",
      category: "Web Development",
      icon: <FaCode className="text-2xl text-blue-600" />
    },
    {
      title: "Fitness Mobile App",
      description: "Cross-platform workout tracker with personalized training plans.",
      category: "Mobile App",
      icon: <FaMobile className="text-2xl text-blue-600" />
    },
    {
      title: "Corporate Dashboard",
      description: "Custom analytics dashboard for business intelligence.",
      category: "UI/UX Design",
      icon: <FaPalette className="text-2xl text-blue-600" />
    }
  ];

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="bg-gray-50"
    >
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-32">
          <motion.div 
            variants={containerVariants}
            className="flex flex-col lg:flex-row items-center justify-between"
          >
            <motion.div 
              variants={slideInLeft} 
              className="lg:w-1/2 mb-10 lg:mb-0 text-center lg:text-left"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Transforming Ideas Into <span className="text-blue-600">Digital Solutions</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0">
                Yashoda Tech Solutions delivers custom software that combines technical excellence with business acumen.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Link 
                  to="/services" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition flex items-center justify-center"
                >
                  Our Services <FaArrowRight className="ml-2" />
                </Link>
                <Link 
                  to="/about" 
                  className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition flex items-center justify-center"
                >
                  Learn About Us
                </Link>
              </div>
            </motion.div>
            <motion.div 
              variants={itemVariants}
              className="lg:w-1/2 w-full flex justify-center px-4 sm:px-0"
            >
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-blue-400 rounded-3xl transform rotate-3 sm:rotate-6"></div>
                <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden">
                  <img 
                    src="public/company.jpg" 
                    alt="Digital Solutions" 
                    className="w-full h-48 sm:h-60  object-center"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="py-12 bg-blue-700 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring" }}
                className="p-4 sm:p-6"
              >
                <p className="text-3xl sm:text-4xl font-bold mb-2">{stat.value}</p>
                <p className="text-lg sm:text-xl">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services Preview */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Our Core Services</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring" }}
                className="bg-gray-50 p-6 sm:p-8 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4 sm:mb-6">{service.description}</p>
                <Link 
                  to="/services" 
                  className="text-blue-600 font-medium flex items-center hover:text-blue-700 text-sm sm:text-base"
                >
                  Learn more <FaArrowRight className="ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Featured Projects</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Some of our recent work that we're proud of
            </p>
          </motion.div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring" }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-5 sm:p-6">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="mr-3">
                      {project.icon}
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-blue-600 bg-blue-50 px-2 sm:px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">{project.description}</p>
                  <Link 
                    to="/projects" 
                    className="text-blue-600 font-medium flex items-center hover:text-blue-700 text-sm sm:text-base"
                  >
                    View case study <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-10 sm:mt-12"
          >
            <Link 
              to="/projects" 
              className="inline-flex items-center px-5 sm:px-6 py-2 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              View All Projects <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring" }}
            className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-10 w-full"
          >
            <img 
              src="https://a.storyblok.com/f/99519/1920x1080/55b0da46bb/5-positive-conflict-tips-you-can-learn-from-high-performance-teams-5.jpg" 
              alt="Our Team" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </motion.div>
          <motion.div 
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:w-1/2 w-full text-center lg:text-left"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Why Choose Yashoda Tech?</h2>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
              Founded by a commerce-graduate-turned-developer, we bring a rare business-first approach to technology. 
              Our solutions are designed to solve real operational challenges while delivering technical excellence.
            </p>
            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 sm:mr-3">✓</span>
                <span className="text-gray-700 text-sm sm:text-base">Unique blend of business and technical expertise</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 sm:mr-3">✓</span>
                <span className="text-gray-700 text-sm sm:text-base">Proven track record with 25+ successful projects</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 sm:mr-3">✓</span>
                <span className="text-gray-700 text-sm sm:text-base">Client-focused development process</span>
              </li>
            </ul>
            <div className="flex justify-center lg:justify-start">
              <Link 
                to="/about" 
                className="inline-flex items-center px-5 sm:px-6 py-2 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Our Story <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-blue-700 text-white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8">
            Let's discuss how we can help bring your vision to life with our technical expertise.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 border border-transparent text-base sm:text-lg font-bold rounded-md text-blue-700 bg-white hover:bg-gray-100"
          >
            Get in Touch <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default HomePage;