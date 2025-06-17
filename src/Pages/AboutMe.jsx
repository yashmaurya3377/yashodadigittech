import React from "react";
import { CgMail } from "react-icons/cg";
import { BsFillTelephoneFill, BsLinkedin } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { ImGithub } from "react-icons/im";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { motion } from "framer-motion";

// Animation Variants
const containerVariant = { 
  hidden: { opacity: 0 }, 
  visible: { opacity: 1, transition: { staggerChildren: 0.4 } } 
};

const itemVariant = { 
  hidden: { opacity: 0, y: 20 }, 
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } } 
};

const slideInVariant = {
  hidden: { 
    x: -150,
    opacity: 0,
    filter: "blur(15px)"
  },
  visible: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      bounce: 1,
      duration: 0.5,
      ease: [0.2, 0.5 , 0.25, 1]
    }
  },
  exit: {
    x: 100,
    opacity: 0,
    transition: { duration: 1 }
  }
};

const scaleUpVariant = { 
  hidden: { scale: 0.8, opacity: 0 }, 
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { type: "spring", damping: 3 }
  } 
};

// Data
const contactItems = [
  { icon: <CgMail className="text-xl mt-1 mr-3" />, text: "yashpratapmaurya3377@gmail.com" },
  { icon: <BsFillTelephoneFill className="text-lg mt-1 mr-3" />, text: "+91 8787256663" },
  { icon: <IoLocationOutline className="text-xl mt-1 mr-3" />, text: "Lucknow, India" },
  { icon: <ImGithub className="text-lg mt-1 mr-3" />, text: "github.com/yashmaurya", link: true },
  { icon: <BsLinkedin className="text-lg mt-1 mr-3" />, text: "LinkedIn Profile", link: true }
];

const skills = [
  { icon: <FaReact className="mr-2" />, title: "Frontend", items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind'] },
  { icon: <FaNodeJs className="mr-2" />, title: "Backend", items: ['Node.js', 'Express', 'REST APIs', 'MongoDB'] },
  { icon: <FaDatabase className="mr-2" />, title: "Other", items: ['Git', 'GitHub', 'CCC', 'Bootstrap'] }
];

const projects = [
  { title: "E-commerce Platform", desc: "Full-featured online store with cart, payments, and admin dashboard", tech: "React, Node.js, MongoDB" ,link:"https://ecommerce-react-tau-seven.vercel.app/"},
  { title: "product Management App", desc: "Drag-and-drop interface for organizing Product", tech: "React, " ,link:"https://product-list-theta-five.vercel.app/"},
  { title: "Portfolio Website", desc: "Interactive portfolio with animated elements", tech: "React, Tailwind CSS" ,link:""},
  { title: "Business Dashboard", desc: "Analytics dashboard for small business owners", tech: "React, Express, MongoDB",link:"https://e-com-using-context-api.vercel.app/" }
];

const professionalExperience = [
  { 
    title: "Freelance Web Developer", 
    period: "2025 - Present", 
    items: [
      "Developed responsive websites for small businesses",
      "Built custom web applications with React and Node.js",
      "Implemented SEO best practices for client websites"
    ]
  },
  { 
    title: "Commerce Graduate", 
    period: "2022 - 2025", 
    items: [
      "Developed strong analytical and problem-solving skills",
      "Gained understanding of business operations and needs"
    ]
  }
];

const education = [
  { title: "Bachelor of Commerce (B.Com)", desc: " Dr. Rammanohar Lohia Avadh University, Ayodhya 2022 - 2025" },
  { title: "Full Stack Development Certification", desc: "Hanumant  Technology IT Company  | 2022" }
];

const AboutMe = () => {
  return (
    <motion.div 
      initial="hidden" 
      animate="visible"
      exit="exit"
      className="max-w-6xl mx-auto bg-white rounded-xl shadow-2xl shadow-gray-900/50 mt-5 overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row">
        {/* Left Column - Profile Section */}
        <motion.div 
          variants={slideInVariant}
          className="w-full lg:w-1/3 py-8 px-6 bg-gradient-to-br from-blue-600 to-blue-800 text-white"
        >
          <div className="flex flex-col items-center">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 150 }}
              className="w-48 h-48 rounded-full overflow-hidden border-4 border-white mb-6 shadow-lg"
            >
              <img 
                src="/yash.jpeg" 
                alt="Yash Pratap Maurya" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>

            <motion.h2 variants={itemVariant} className="text-2xl font-bold mb-2">Yash Pratap Maurya</motion.h2>
            <motion.p variants={itemVariant} className="text-blue-100 font-medium mb-6">Full Stack Developer</motion.p>

            <motion.div variants={containerVariant} className="w-full space-y-4 mb-8">
              <motion.h3 variants={itemVariant} className="text-xl font-semibold mb-4 text-center border-b border-blue-400 pb-2">
                Contact Info
              </motion.h3>
              {contactItems.map((item, i) => (
                <motion.div key={i} variants={itemVariant} className="flex items-start">
                  {item.icon}
                  {item.link ? (
                    <a href="#" target="_blank" rel="noopener noreferrer" className="hover:underline">{item.text}</a>
                  ) : <span>{item.text}</span>}
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={containerVariant} className="w-full">
              <motion.h3 variants={itemVariant} className="text-xl font-semibold mb-4 text-center border-b border-blue-400 pb-2">
                Technical Skills
              </motion.h3>
              {skills.map((skill, i) => (
                <motion.div key={i} variants={itemVariant} className="mb-4">
                  <h4 className="font-medium mb-2 flex items-center">{skill.icon} {skill.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, j) => (
                      <span key={j} className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">{item}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column - Content Section */}
        <motion.div 
          variants={slideInVariant}
          transition={{ delay: 0.2 }}
          className="w-full lg:w-2/3 p-8"
        >
          <motion.div variants={containerVariant} className="h-full flex flex-col">
            {/* About Section */}
            <motion.div variants={itemVariant} className="mb-8">
              <motion.h1 variants={scaleUpVariant} className="text-3xl font-bold mb-6 text-blue-700">
                About Me
              </motion.h1>
              <motion.p variants={itemVariant} className="mb-4 text-gray-700 leading-relaxed">
                I'm a <span className="font-semibold text-blue-600">B.Com graduate</span> turned <span className="font-semibold text-blue-600">Full Stack Developer</span> with expertise in modern web technologies.
              </motion.p>
              <motion.p variants={itemVariant} className="text-gray-700 leading-relaxed">
                I specialize in creating responsive, performant web applications with clean, maintainable code. My commerce background helps me understand real business needs and translate them into effective technical solutions.
              </motion.p>
            </motion.div>

            {/* Experience Section */}
            <motion.div variants={itemVariant} className="mb-8">
              <motion.h2 variants={scaleUpVariant} className="text-2xl font-semibold mb-4 text-blue-600 border-b pb-2">
                Professional Experience
              </motion.h2>
              <motion.div variants={containerVariant} className="space-y-6">
                {professionalExperience.map((exp, i) => (
                  <motion.div 
                    key={i} 
                    variants={itemVariant}
                    whileHover={{ scale: 1.02 }}
                    className="pl-4 border-l-4 border-blue-400 bg-gray-50 rounded-r-lg p-4"
                  >
                    <h3 className="font-bold text-lg">{exp.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{exp.period}</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      {exp.items.map((item, j) => <li key={j}>{item}</li>)}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Projects Section */}
            <motion.div variants={itemVariant} className="mb-8">
              <motion.h2 variants={scaleUpVariant} className="text-2xl font-semibold mb-4 text-blue-600 border-b pb-2">
                Featured Projects
              </motion.h2>
              <motion.div variants={containerVariant} className="grid md:grid-cols-2 gap-6">
                {projects.map((project, i) => (
                  <motion.div 
                    key={i} 
                    variants={itemVariant} 
                    whileHover={{ 
                      y: -5,
                      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                    }}
                    className="bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-all"
                  >
                    <h3 className="font-bold text-lg mb-2 text-blue-700">{project.title}</h3>
                    <p className="text-gray-600 mb-3">{project.desc}</p>
                    <p className="text-sm text-gray-500 mb-3"><strong>Tech:</strong> {project.tech}</p>
                    <a href={project.link} className="text-blue-600 hover:underline text-sm font-medium">View Project →</a>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Education Section */}
            <motion.div variants={itemVariant}>
              <motion.h2 variants={scaleUpVariant} className="text-2xl font-semibold mb-4 text-blue-600 border-b pb-2">
                Education
              </motion.h2>
              <motion.div variants={containerVariant} className="space-y-4">
                {education.map((edu, i) => (
                  <motion.div 
                    key={i} 
                    variants={itemVariant}
                    whileHover={{ x: 5 }}
                    className="pl-4 border-l-4 border-blue-400"
                  >
                    <h3 className="font-bold text-lg">{edu.title}</h3>
                    <p className="text-gray-600">{edu.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutMe;