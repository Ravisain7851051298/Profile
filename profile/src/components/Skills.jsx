import React from 'react'
import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaFigma } from 'react-icons/fa'
import { SiJavascript, SiMongodb, SiExpress, SiTailwindcss, SiRedux } from 'react-icons/si'
import '../styles/skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", icon: <FaReact />, level: 70 },
        { name: "JavaScript", icon: <SiJavascript />, level: 80 },
        { name: "Redux", icon: <SiRedux />, level: 10 },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 70 }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, level: 85 },
        { name: "Express.js", icon: <SiExpress />, level: 80 },
        { name: "MongoDB", icon: <SiMongodb />, level: 85 },
        { name: "REST APIs", icon: <FaDatabase />, level: 90 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", icon: <FaGitAlt />, level: 85 },
        { name: "Figma", icon: <FaFigma />, level: 50 },
        { name: "MongoDB Atlas", icon: <SiMongodb />, level: 80 },
        { name: "Version Control", icon: <FaGitAlt />, level: 10 }
      ]
    }
  ]

  return (
    <section className="skills-section" id="skills">
      <motion.div 
        className="skills-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="skills-header">
          <h2>My Skills</h2>
          <div className="underline"></div>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              className={`skill-category ${index === 2 ? 'full-width' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3>{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="skill-icon">{skill.icon}</div>
                    <div className="skill-info">
                      <span>{skill.name}</span>
                      <div className="progress-bar">
                        <motion.div 
                          className="progress"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills
