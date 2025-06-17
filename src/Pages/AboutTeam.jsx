import React from 'react';
import { FaUsers, FaLightbulb, FaChartLine, FaHandshake, FaCode, FaMobileAlt, FaServer } from 'react-icons/fa';
import { CgMail } from "react-icons/cg";
import { BsFillTelephoneFill, BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Simplified animation variants
const fadeUp = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { type: "spring", stiffness: 100 }
  }
};

const slideIn = {
  hidden: { x: -100, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { type: "spring", stiffness: 100 }
  }
};

const scaleUp = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { type: "spring", stiffness: 100 }
  }
};

const AboutCompany = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Yash Pratap Maurya",
      role: "Founder & Full Stack Developer",
      bio: "B.Com graduate turned developer with expertise in React, Node.js, and MongoDB. Passionate about building business-focused applications.",
      skills: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      image: "public/yash.jpeg",
      social: { github: "#", linkedin: "#", twitter: "#" }
    },
    {
      id: 2,
      name: "Shivam",
      role: "Frontend Developer",
      bio: "Specializes in creating beautiful, responsive user interfaces with React and modern CSS frameworks.",
      skills: ["React", "JavaScript", "CSS", "Figma"],
      image: "public/team1.jpg",
      social: { github: "#", linkedin: "#", twitter: "#" }
    },
    {
      id: 3,
      name: "Priya",
      role: "UI/UX Designer",
      bio: "Creates intuitive user experiences and stunning visual designs that enhance usability.",
      skills: ["Figma", "Adobe XD", "User Research", "Prototyping"],
      image: "public/team2.jpg",
      social: { github: "#", linkedin: "#", twitter: "#" }
    },
    {
      id: 4,
      name: "Ansh",
      role: "Backend Developer",
      bio: "Expert in building scalable server architectures, APIs, and database systems.",
      skills: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
      image: "public/team3.jpg",
      social: { github: "#", linkedin: "#", twitter: "#" }
    }
  ];

  const values = [
    { icon: <FaUsers />, title: "Client-Centric", desc: "Your business goals drive our development process. We listen first, then build." },
    { icon: <FaLightbulb />, title: "Innovation", desc: "We stay ahead of the curve with cutting-edge technologies and modern approaches." },
    { icon: <FaChartLine />, title: "Quality", desc: "From code architecture to user experience, we never compromise on quality." },
    { icon: <FaHandshake />, title: "Integrity", desc: "Honest communication and ethical practices form the foundation of every project." }
  ];

  const expertise = [
    { icon: <FaCode />, title: "Frontend", items: ["React.js", "Tailwind CSS", "Responsive Design", "UI/UX Implementation"] },
    { icon: <FaServer />, title: "Backend", items: ["Node.js", "Express.js", "MongoDB", "RESTful APIs"] },
    { icon: <FaMobileAlt />, title: "Mobile", items: ["React Native", "PWA Development", "Cross-platform", "App Store Deployment"] }
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.1 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      {/* Hero Section */}
      <div className="text-center mb-16">
        <motion.h1 variants={fadeUp} className="text-4xl font-bold text-gray-900 mb-4">
          About Yashoda Tech Solutions
        </motion.h1>
        <motion.p variants={fadeUp} className="text-xl text-gray-600 max-w-3xl mx-auto">
          Building digital experiences that drive business growth and innovation
        </motion.p>
      </div>

      {/* Company Overview */}
      <motion.div variants={scaleUp} className="bg-white rounded-xl shadow-lg overflow-hidden mb-16">
        <div className="md:flex">
          <motion.div variants={slideIn} className="md:w-1/3 p-8 flex flex-col items-center bg-gray-100">
            <motion.div whileHover={{ scale: 1.05 }} className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500 mb-4">
              <img src="public/image.png" alt="Company Logo" className="w-full h-full object-cover" />
            </motion.div>
            <h2 className="text-2xl font-bold text-blue-700">Yashoda Tech Solutions</h2>
            <p className="text-gray-600 mb-6">Full Stack Development Agency</p>
            
            <div className="w-full">
              <h3 className="font-semibold text-lg text-blue-600 mb-3">Contact Info</h3>
              <ul className="space-y-3">
                {[
                  { icon: <CgMail className="text-xl text-blue-500" />, text: "contact@codecraftsolutions.com" },
                  { icon: <BsFillTelephoneFill className="text-lg text-blue-500" />, text: "+91 8787256663" },
                  { icon: <IoLocationOutline className="text-xl text-blue-500" />, text: "Lucknow, India" },
                  { icon: <BsGithub className="text-lg text-blue-500" />, text: "github.com/codecraft-solutions", link: true }
                ].map((item, i) => (
                  <motion.li key={i} variants={fadeUp} className="flex items-center">
                    <span className="mr-3">{item.icon}</span>
                    {item.link ? (
                      <a href="#" target="_blank" rel="noopener noreferrer">{item.text}</a>
                    ) : <span>{item.text}</span>}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
          
          <motion.div variants={slideIn} className="md:w-2/3 p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
            <motion.p variants={fadeUp} className="text-gray-600 mb-4">
              Founded in 2022 by Yash Pratap Maurya, Yashoda Tech Solutions began as a passion project to bridge the gap 
              between business needs and technical solutions.
            </motion.p>
            <motion.p variants={fadeUp} className="text-gray-600 mb-6">
              We combine Yash's unique background in commerce with cutting-edge development expertise to deliver 
              applications that are both technically excellent and business-savvy.
            </motion.p>
            
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { value: "25+", label: "Projects Completed" },
                { value: "15+", label: "Happy Clients" },
                { value: "5+", label: "Years Experience" }
              ].map((stat, i) => (
                <motion.div key={i} variants={fadeUp} className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-bold text-blue-700">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <h3 className="text-xl font-semibold mb-3 text-blue-600">Our Expertise</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {expertise.map((area, i) => (
                <motion.div key={i} variants={fadeUp} className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-2">
                    <span className="text-xl text-blue-500 mr-2">{area.icon}</span>
                    <h4 className="font-medium">{area.title}</h4>
                  </div>
                  <ul className="space-y-1 text-sm">
                    {area.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Values Section */}
      <div className="mb-16">
        <motion.h2 variants={fadeUp} className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Core Values
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, i) => (
            <motion.div 
              key={i} 
              variants={fadeUp}
              whileHover={{ y: -5 }}
              className="text-center p-6 bg-white rounded-xl shadow-md"
            >
              <div className="flex justify-center mb-4 text-blue-600 text-4xl">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Founder Section */}
      <motion.div variants={scaleUp} className="bg-white rounded-xl shadow-lg p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Meet Our Founder</h2>
        <div className="flex flex-col md:flex-row items-center">
          <motion.div variants={slideIn} className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500">
              <Link to='/aboutme'>
                <img src="public/yash.jpeg" alt="Yash Pratap Maurya" className="w-full h-full object-cover" />
              </Link>
            </div>
          </motion.div>
          <motion.div variants={slideIn} className="md:w-3/4 md:pl-8">
            <h3 className="text-2xl font-bold text-blue-700 mb-2">Yash Pratap Maurya</h3>
            <p className="text-blue-600 font-medium mb-4">Full Stack Developer & Founder</p>
            <p className="text-gray-600 mb-4">
              A B.Com graduate turned developer, Yash brings a unique perspective to software development.
            </p>
            <div className="flex flex-wrap gap-2">
              {["React", "Node.js", "MongoDB", "Tailwind CSS"].map((skill, i) => (
                <span key={i} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Expert Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <motion.div 
              key={member.id}
              variants={fadeUp}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="h-64 bg-gray-200 relative">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-blue-600 mb-3">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {member.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900">
                    <BsGithub className="text-xl" />
                  </a>
                  <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-700">
                    <BsLinkedin className="text-xl" />
                  </a>
                  <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400">
                    <BsTwitter className="text-xl" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <motion.div variants={scaleUp} className="bg-blue-700 rounded-xl p-8 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Build Your Next Project?</h2>
        <p className="text-xl mb-6 max-w-2xl mx-auto">
          Let's discuss how we can help bring your vision to life.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-blue-700 font-bold py-3 px-8 rounded-lg"
        >
          <Link to="/contact">Get in Touch</Link>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default AboutCompany;