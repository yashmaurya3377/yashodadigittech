import React from 'react';
import { FiExternalLink, FiGithub, FiStar, FiCode } from 'react-icons/fi';

const Projects = () => {
  const projectList = [
    {
      title: "E-commerce Platform",
      description: "A complete online shopping solution with admin dashboard, product management, and secure checkout.",
      features: [
        "Product catalog with search & filters",
        "JWT authentication system",
        "Shopping cart with local storage",
        "Stripe payment gateway integration",
        "Order tracking & invoice generation"
      ],
      tools: ["React", "Redux", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
      img: "https://ecommerce-react-tau-seven.vercel.app/",
      demo: "https://ecommerce-react-tau-seven.vercel.app/",
      code: "https://github.com/yashmaurya3377/Ecommerce",
      status: "Live Production",
      date: "March 2025",
      challenges: "Implementing real-time inventory updates and optimizing checkout flow",
      lessons: "Learned about payment gateway integrations and performance optimization"
    },
    {
      title: "Task Manager Pro",
      description: "Collaborative task management system with team features and productivity analytics.",
      features: [
        "Kanban board with drag-and-drop",
        "Team collaboration spaces",
        "Task priority & deadlines",
        "Productivity reports & charts",
        "Dark/light mode toggle"
      ],
      tools: ["React", "Tailwind CSS", "React ", ],
      img: "https://product-list-theta-five.vercel.app/",
      demo: "https://product-list-theta-five.vercel.app/",
      code: "https://github.com/yashmaurya3377/ProductList",
      status: "Beta Version",
      date: "March 2023",
      challenges: "Real-time sync across multiple users",
      lessons: "Mastered Firebase realtime database and offline-first design"
    },
    {
      title: "Modern E-commerce Store",
      description: "Mobile-first online store with focus on UX and performance.",
      features: [
        "Responsive product grids",
        "Wishlist functionality",
        "Product reviews & ratings",
        "SEO optimized pages",
        "Progressive Web App features"
      ],
      tools: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      img: "https://e-com-yashs-projects-f90fd0f3.vercel.app/",
      demo: "https://e-com-yashs-projects-f90fd0f3.vercel.app/",
      code: "https://github.com/yashmaurya3377/E.COM",
      status: "Live",
      date: "January 2025",
      challenges: "Creating smooth animations without frameworks",
      lessons: "Deepened vanilla JS DOM manipulation skills"
    },
    ,
    {
      title: "Modern grocery Store",
      description: "Mobile-first online store with focus on UX and performance.",
      features: [
        "Responsive product grids",
        "Wishlist functionality",
        "Product reviews & ratings",
        "SEO optimized pages",
        "Progressive Web App features"
      ],
      tools: ["HTML", "CSS", "Tailwind Css","Ract", "JavaScript"],
      img: "https://e-com-using-context-api.vercel.app/",
      demo: "https://e-com-using-context-api.vercel.app/",
      code: "https://github.com/yashmaurya3377/e-com-using-contextApi/tree/main/src",
      status: "Live",
      date: "May 2025",
      challenges: "Creating smooth animations without frameworks",
      lessons: "Deepened vanilla JS DOM manipulation skills"
    },
    {
      title: "Luxury Hotel Booking",
      description: "Booking platform for luxury hotels with room availability calendar.",
      features: [
        "Interactive room gallery",
        "Booking date picker",
        "Amenities filtering",
        "Customer testimonials",
        "Contact form with validation"
      ],
      tools: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      img: "https://hotel-website-lac-gamma.vercel.app/",
      demo: "https://hotel-website-lac-gamma.vercel.app/",
      code: "https://github.com/yashmaurya3377/hotelWebsite",
      status: "Live",
      date: "November 2022",
      challenges: "Implementing date conflict checking",
      lessons: "Learned about date handling in JavaScript"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here's a collection of my recent work, each solving unique challenges and showcasing different technical skills.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {projectList.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-60 bg-gray-100 overflow-hidden">
                <iframe
                  src={project.img}
                  title={project.title}
                  className="w-full h-full object-cover"
                  frameBorder="0"
                  allowFullScreen
                />
                <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm font-medium shadow">
                  {project.status}
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
                    <span className="text-sm text-gray-500">{project.date}</span>
                  </div>
                  <p className="text-gray-600 mt-2">{project.description}</p>
                </div>

                <div className="mb-5">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <FiStar className="mr-2 text-blue-500" /> Key Features
                  </h4>
                  <ul className="grid grid-cols-2 gap-2 text-sm">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                  <div className="mb-5">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <FiCode className="mr-2 text-blue-500" /> Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.challenges && (
                    <div className="mb-5 p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Challenges</h4>
                      <p className="text-sm text-gray-700">{project.challenges}</p>
                    </div>
                  )}

                  {project.lessons && (
                    <div className="mb-5 p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Key Learnings</h4>
                      <p className="text-sm text-gray-700">{project.lessons}</p>
                    </div>
                  )}

                  <div className="flex space-x-3 mt-4">
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                      >
                        <FiExternalLink className="mr-2" /> Live Demo
                      </a>
                    )}
                    {project.code && (
                      <a 
                        href={project.code} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition"
                      >
                        <FiGithub className="mr-2" /> View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;