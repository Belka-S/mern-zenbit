const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

// const router = require('./routes');

const app = express();

// Enable CORS
app.use(cors());
// Parse JSON
app.use(express.json());
// Parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes handling
// app.use('/api', router);

// Missing route error 404: 'Not Found',
app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

// Global error 500: 'Internal Server Error',
app.use((err, req, res, next) => {
  const { status = 500, code, message = 'Server error!' } = err;
  res.status(status).json({ code, message });
});

module.exports = app;
