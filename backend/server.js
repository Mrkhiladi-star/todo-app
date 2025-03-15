const express = require('express');
const cors = require('cors');
const todoRoutes = require('./routes/todoRoutes');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB

connectDB();

// Routes
app.use('/api/todos', todoRoutes); 

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));