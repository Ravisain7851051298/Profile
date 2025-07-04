import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'
import '../styles/contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your form submission logic here
    console.log(formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="contact-section" id="contact">
      <motion.div
        className="contact-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="contact-header">
          <h2>Get In Touch</h2>
          <div className="underline"></div>
        </div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Let's Connect</h3>
            <p>Feel free to reach out for collaborations or just a friendly hello!</p>

            <div className="contact-details">
              <div className="contact-item">
                <FaEnvelope />
                <a href='mailto:ravisain7851051298@gmail.com' class="email-link">ravisain7851051298@gmail.com</a>
              </div>
              <div className="contact-item">
                <FaPhone />
                <a href="tel:%2B7851051298" class="phone-link">+91 78510 51298</a>
              </div>
            </div>

            <div className="social-links">
              <motion.a
                href="https://github.com/Ravisain7851051298"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/Ravisain75688"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
              >
                <FaLinkedin />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
