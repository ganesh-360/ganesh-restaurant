import React from 'react'
import { motion } from 'framer-motion'
import './Menu.css'

const menuItems = [
  { id: 1, name: 'Truffle Tagliatelle', price: '$34', desc: 'Handcrafted pasta, wild mushrooms, fresh shaved black winter truffles.', img: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?q=80&w=500' },
  { id: 2, name: 'Wagyu Ribeye', price: '$85', desc: 'A5 Japanese Wagyu, wood-fired rosemary glaze, smoked sea salt flakes.', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=500' },
  { id: 3, name: 'Golden Caviar Tart', price: '$42', desc: 'Ossetra caviar, creme fraiche, crisp buttery laminated pastry shell.', img: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=500' }
]

const Menu = () => {
  return (
    <section>
      <h2 className="section-title">The <span>Menu</span></h2>
      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <motion.div 
            className="menu-card"
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div className="card-img">
              <img src={item.img} alt={item.name} />
            </div>
            <div className="card-info">
              <div className="card-header">
                <h3>{item.name}</h3>
                <span className="price">{item.price}</span>
              </div>
              <p>{item.desc}</p>
              <button className="order-btn">Order Now</button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Menu