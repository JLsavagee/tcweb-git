const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const uploadRoute = require('./routes/upload.js'); // Import the upload route

// Enable All CORS Requests
app.use(cors());

// Parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Stellen Sie sicher, dass der Pfad zu Ihrem 'frontend' Verzeichnis korrekt ist
app.use(express.static(path.join(__dirname, '../frontend')));

// ... other middleware and routes ...

app.use('/upload', uploadRoute); // Use the upload route

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;