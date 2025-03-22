import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import '../styles/projects.css'

const Projects = () => {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with MERN stack featuring user authentication, product management, and payment integration.",
      image: "/ecommerce-preview.png",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      category: "fullstack",
      github: "https://github.com/yourusername/ecommerce",
      live: "https://your-ecommerce.com"
    },
    {
      title: "Task Management App",
      description: "A responsive task management application with drag-and-drop functionality and real-time updates.",
      image: "/taskapp-preview.png",
      tags: ["React", "Redux", "Node.js"],
      category: "frontend",
      github: "https://github.com/yourusername/taskapp",
      live: "https://your-taskapp.com"
    },
    {
      title: "Portfolio Website",
      description: "A modern portfolio website showcasing my projects and skills with smooth animations.",
      image: "/portfolio-preview.png",
      tags: ["React", "Framer Motion"],
      category: "frontend",
      github: "https://github.com/yourusername/portfolio",
      live: "https://your-portfolio.com"
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
