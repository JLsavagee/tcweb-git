// backend/routes/upload.js

const express = require('express');
const router = express.Router();
const cors = require('cors');
const uploadController = require('../controllers/Upload');

router.use(cors()); // Enable CORS

router.post('/upload', uploadController.uploadFiles, uploadController.renameUploadedFiles, (req, res) => {
    // Assuming that renaming was successful and you want to send back info for all files
    if (req.files && req.files.length > 0) {
        const filesInfo = req.files.map(file => ({
            originalName: file.originalname,
            newFilename: file.filename // Assuming file.filename has been set to the new filename in renameUploadedFiles middleware
        }));
        res.json({ success: true, message: "File(s) uploaded successfully", files: filesInfo });
    } else {
        res.status(400).json({ success: false, message: "No files uploaded" });
    }
});

module.exports = router;
