import React from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaDatabase, FaDesktop } from 'react-icons/fa'
import '../styles/about.css'

const About = () => {
  const skills = [
    {
      icon: <FaCode />,
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces using React.js and modern CSS"
    },
    {
      icon: <FaDatabase />,
      title: "Backend Development",
      description: "Building robust server-side applications with Node.js, Express, and MongoDB"
    },
    {
      icon: <FaDesktop />,
      title: "UI/UX Design",
      description: "Designing intuitive and engaging user experiences with modern design principles"
    }
  ]

  return (
    <section className="about-section" id="about">
      <motion.div 
        className="about-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="about-header">
          <h2>About Me</h2>
          <div className="underline"></div>
        </div>

        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p>
              Hi! I'm Ravi Sain, a passionate MERN stack developer with a strong foundation in web development. 
              I enjoy creating digital solutions that solve real-world problems.
            </p>
            <p>
              With expertise in MongoDB, Express.js, React.js, and Node.js, I specialize in building 
              full-stack applications that are both performant and user-friendly.
            </p>
          </motion.div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                className="skill-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="skill-icon">{skill.icon}</div>
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About

