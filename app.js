const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, './frontend')));

app.listen(3000, () => {
  console.log('Server läuft auf Port 3000');
});
