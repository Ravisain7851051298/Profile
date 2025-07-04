import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import '../styles/hero.css'
import profileImage from '/profile.png'

const Hero = () => {
  return (
    <section className="hero-container" id="hero">
      <div className="hero-grid">
        <motion.div 
          className="hero-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="title-container">
            <motion.span 
              className="subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              👋 Welcome to my portfolio
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Transforming Ideas into
              <span className="highlight"> Digital Reality</span>
            </motion.h1>
            <motion.div 
              className="role"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <span className="tag">MERN Stack Developer</span>
              
            </motion.div>
          </div>

          <motion.div 
            className="cta-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >  
            <a href='https://www.linkedin.com/services/page/31576332a01a741324/'>
            <button className="cta-primary">View My Work</button>
            </a>
            <a href="/myCV.pdf">
            <button className="cta-secondary">Download CV</button>
            </a>
          </motion.div>

          <motion.div 
            className="social-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <a href="https://github.com/Ravisain7851051298" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/Ravisain75688" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://x.com/ravi_sain04" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-right"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="image-container">
            <div className="image-backdrop"></div>
            <motion.img 
              src={profileImage} 
              alt="Ravi Sain"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero