import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './Contact.css'

const Contact = () => {
  // Setup state to track input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    request: ''
  })
  const [statusMsg, setStatusMsg] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatusMsg('Sending...')

    try {
      // Send data to the Node.js backend server running on port 5000
      const response = await fetch('http://localhost:5000/api/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        setStatusMsg('Table booked successfully!')
        setFormData({ name: '', email: '', phone: '', request: '' }) // Clear form
      } else {
        setStatusMsg('Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setStatusMsg('Could not connect to the server.')
    }
  }

  return (
    <section>
      <h2 className="section-title">Book A <span>Table</span></h2>
      <motion.div 
        className="contact-container"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="input-group">
            <input 
              type="text" 
              name="name"
              required 
              placeholder="Name" 
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <input 
              type="email" 
              name="email"
              required 
              placeholder="Email" 
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <input 
              type="tel" 
              name="phone"
              required 
              placeholder="Phone Number" 
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <textarea 
              name="request"
              rows="4" 
              required 
              placeholder="Special Request / Reservation Details"
              value={formData.request}
              onChange={handleChange}
            ></textarea>
          </div>
          <motion.button 
            type="submit" 
            className="submit-btn"
            whileTap={{ scale: 0.98 }}
          >
            Confirm Reservation
          </motion.button>
          
          {statusMsg && <p className="status-message" style={{ textAlign: 'center', marginTop: '10px', color: '#d4af37' }}>{statusMsg}</p>}
        </form>
      </motion.div>
    </section>
  )
}

export default Contact