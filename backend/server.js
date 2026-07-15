const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/ganesh_restaurant';
mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB Connected Successfully'))
  .catch(err => console.error('Database connection error:', err));

// Create a Database Schema for Reservations
const ReservationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  request: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Reservation = mongoose.model('Reservation', ReservationSchema);

// API Route to receive data from React
app.post('/api/reservations', async (req, res) => {
  try {
    const { name, email, phone, request } = req.body;
    
    const newReservation = new Reservation({ name, email, phone, request });
    await newReservation.save();
    
    res.status(201).json({ success: true, message: 'Reservation stored successfully!' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend server running on port ${PORT}`));