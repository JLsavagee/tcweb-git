// backend/app.js

const express = require('express');
const cors = require('cors'); // Include CORS
const uploadRoutes = require('./routes/upload');

const app = express();

app.use(cors()); // Apply CORS middleware to enable cross-origin requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the upload routes
app.use('/', uploadRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
