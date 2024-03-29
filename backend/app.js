// backend/app.js

const express = require('express');
const cors = require('cors'); // Include CORS
const uploadRoutes = require('./routes/upload');
const findPlayer = require('./routes/find_player')
const startWatching = require('./file_watcher');

const app = express();

app.use(cors()); // Apply CORS middleware to enable cross-origin requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the upload routes
app.use('/', uploadRoutes);
app.use('/api', findPlayer);

const PORT = process.env.PORT || 5001;

startWatching();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
