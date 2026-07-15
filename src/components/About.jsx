import React from 'react'
import { motion } from 'framer-motion'
import './About.css'

const About = () => {
  return (
    <section>
      <h2 className="section-title">Our <span>Story</span></h2>
      <div className="about-grid">
        <motion.div 
          className="about-text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3>Crafting Moments Since 1998</h3>
          <p>Nestled in the heart of downtown, L'Étoile brings an elevated gastronomic experience to global food lovers. We combine traditional old-world techniques with experimental modern flavors.</p>
          <p>Every single ingredient is selected directly from regional organic micro-farms every morning to ensure pristine quality on your plate.</p>
        </motion.div>

        <motion.div 
          className="about-image-wrapper"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=800" alt="Chef preparing dish" />
        </motion.div>
      </div>
    </section>
  )
}

export default About