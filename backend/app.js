const express = require('express');
const cors = require('cors');
const uploadRoutes = require('./routes/upload');
const findPlayer = require('./routes/find_player');
const startWatching = require('./file_watcher');

const app = express();

// Configure CORS
app.use(cors({
  origin: ['http://team-cards.de', 'https://team-cards.de'],
  methods: ['GET', 'POST'], // Specify allowed methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the upload routes
app.use('/', uploadRoutes);
app.use('/api', findPlayer);

const PORT = process.env.PORT || 5001;

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

startWatching();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});