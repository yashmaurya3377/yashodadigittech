import React from 'react';
import { FaCode, FaMobileAlt, FaServer, FaDatabase, FaPaintBrush, FaSearch } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaCode className="text-4xl mb-4 text-blue-600" />,
      title: "Web Development",
      description: "Custom web applications built with modern technologies like React, Next.js, and Tailwind CSS for optimal performance and user experience.",
      features: [
        "Responsive design",
        "SEO optimization",
        "Progressive Web Apps",
        "Performance tuning"
      ]
    },
    {
      icon: <FaMobileAlt className="text-4xl mb-4 text-blue-600" />,
      title: "Mobile Development",
      description: "Cross-platform mobile applications using React Native for both iOS and Android platforms.",
      features: [
        "Native-like performance",
        "Offline capabilities",
        "Push notifications",
        "App store deployment"
      ]
    },
    {
      icon: <FaServer className="text-4xl mb-4 text-blue-600" />,
      title: "Backend Development",
      description: "Robust server-side solutions with Node.js, Express, and other backend technologies.",
      features: [
        "RESTful APIs",
        "Authentication systems",
        "Payment integration",
        "Server deployment"
      ]
    },
    {
      icon: <FaDatabase className="text-4xl mb-4 text-blue-600" />,
      title: "Database Design",
      description: "Efficient database architecture and implementation with SQL and NoSQL solutions.",
      features: [
        "MongoDB expertise",
        "PostgreSQL setup",
        "Data modeling",
        "Query optimization"
      ]
    },
    {
      icon: <FaPaintBrush className="text-4xl mb-4 text-blue-600" />,
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces that enhance user experience and engagement.",
      features: [
        "Wireframing",
        "Prototyping",
        "User testing",
        "Design systems"
      ]
    },
    {
      icon: <FaSearch className="text-4xl mb-4 text-blue-600" />,
      title: "SEO Optimization",
      description: "Improve your website's visibility and ranking on search engines with proven SEO techniques.",
      features: [
        "Keyword research",
        "On-page optimization",
        "Technical SEO",
        "Analytics setup"
      ]
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions tailored to your business needs, from concept to deployment.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-center">
                {service.icon}
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 text-left">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="text-blue-500 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-xl shadow-lg">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Work Process</h3>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="text-center max-w-xs">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <h4 className="font-semibold mb-2">Discovery</h4>
                <p className="text-gray-600">Understanding your requirements and goals</p>
              </div>
              <div className="text-center max-w-xs">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <h4 className="font-semibold mb-2">Planning</h4>
                <p className="text-gray-600">Creating a roadmap and architecture</p>
              </div>
              <div className="text-center max-w-xs">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <h4 className="font-semibold mb-2">Development</h4>
                <p className="text-gray-600">Building the solution with best practices</p>
              </div>
              <div className="text-center max-w-xs">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold">4</span>
                </div>
                <h4 className="font-semibold mb-2">Delivery</h4>
                <p className="text-gray-600">Testing and deploying the final product</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;