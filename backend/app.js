onst express = require('express');
const cors = require('cors');
const helmet = require('helmet'); // Add Helmet for security
const aiRoutes = require('./routes/aiRoutes');

const app = express();

// Security Middleware
app.use(helmet());

// Request Parsing
app.use(express.json());

// CORS Handling
app.use(cors());

// Routing
app.use('/api', aiRoutes);

// Error Handling Middleware (add this)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Port Configuration
const PORT = process.env.PORT || 5000;

// Server Start
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
