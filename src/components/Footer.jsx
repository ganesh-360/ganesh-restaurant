import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} L'Étoile. All Rights Reserved.</p>
        <div className="socials">
          <a href="#instagram">Instagram</a>
          <a href="#facebook">Facebook</a>
          <a href="#twitter">Twitter</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer