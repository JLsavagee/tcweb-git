const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.get('/check-image/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, '../processed_files', filename);
    console.log(`Checking file path: ${filePath}`);

    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            console.error(`File not accessible: ${err.message}`);
            res.json({ available: false });
        } else {
            console.log(`File available: ${filePath}`);
            res.json({ available: true });
        }
    });
});

module.exports = router;
