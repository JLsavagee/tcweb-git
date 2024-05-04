const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'frontend/build' directory
app.use(express.static(path.join(__dirname, 'frontend', 'build')));

// Serve the React app for any other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});