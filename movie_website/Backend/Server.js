const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/Auth');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

const mongoUri = 'mongodb://localhost:27017/yourDatabaseName';
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Serve static files from the React app's dist directory
app.use(express.static(path.join(__dirname, '../dist')));

// API routes
app.use('/api/auth', authRoutes);

// The "catchall" handler: for any request that doesn't match one above, send back index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
