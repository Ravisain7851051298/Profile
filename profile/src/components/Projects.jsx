import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import '../styles/projects.css'


const Projects = () => {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      title: "Phone verification",
      description: "A full-stack platform built with MERN stack featuring user authentication via phone number and otp and provide profile data using custom hooks and APIs ",
      image: "/Phone-verification.png",
      tags: ["React", "Node.js", "MongoDB", "Express" , "Context" , "APIs" , "Twilio","tailwind"],
      category: "fullstack",
      github: "https://github.com/Ravisain7851051298/phone_verification",
      live: "https://github.com/Ravisain7851051298/phone_verification"
    },
    {
      title: "ChatGPT-mini",
      description: "A responsive chatGPT mini web application that intract with ChatGPT model 4.1 and then responce responce is clean and simple text based only..",
      image: "/chatgpt-mini.png",
      tags: ["React", "Redux", "Node.js" , "APIs", "openai API", "tailwind"],
      category: "fullstack",
      github: "https://github.com/Ravisain7851051298/chatGPT-mini",
      live: "https://chat-gpt-mini-iota.vercel.app/"
    },
    {
      title: "Portfolio Website",
      description: "A modern portfolio website showcasing my projects and skills with smooth animations.",
      image: "/portfolio-preview.png",
      tags: ["React", "Framer Motion", "tailwind", "single page routing"],
      category: "frontend",
      github: "https://github.com/Ravisain7851051298/Profile",
      live: "https://profile-tan-three.vercel.app/"
    }
  ]

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'fullstack', label: 'Full Stack' }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <section className="projects-section" id="projects">
      <motion.div 
        className="projects-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="projects-header">
          <h2>My Projects</h2>
          <div className="underline"></div>
        </div>

        <div className="filter-buttons">
          {categories.map(category => (
            <motion.button
              key={category.id}
              className={`filter-btn ${filter === category.id ? 'active' : ''}`}
              onClick={() => setFilter(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </div>

        <motion.div 
          className="projects-grid"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                className="project-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <motion.a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaGithub />
                    </motion.a>
                    <motion.a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaExternalLinkAlt />
                    </motion.a>
                  </div>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Projects
