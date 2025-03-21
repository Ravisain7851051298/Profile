import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navItems = ['About', 'Skills', 'Projects', 'Contact']

  return (
    <nav className="navbar">
      <div className="nav-content">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="logo"
        >
          YN
        </motion.div>

        <div className="desktop-menu">
          {navItems.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                className="nav-link"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mobile-menu-button"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mobile-menu"
        >
          {navItems.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              className="mobile-nav-link"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  )
}

export default Navbar