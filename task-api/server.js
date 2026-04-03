const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load environment variables FIRST
dotenv.config();

// Debug check (remove later)
console.log("MONGO_URI:", process.env.MONGO_URI);

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Test Route (Health Check)
app.get('/', (req, res) => {
    res.send('🚀 Task API is running...');
});

// Routes
app.use('/api/tasks', require('./routes/taskRoutes'));

// Global Error Handler (Optional but good practice)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});