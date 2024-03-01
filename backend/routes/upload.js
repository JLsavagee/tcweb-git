// backend/routes/upload.js

const express = require('express');
const router = express.Router();
const cors = require('cors');
const uploadController = require('../controllers/Upload');

router.use(cors()); // Enable CORS

router.post('/upload', uploadController.uploadFiles, uploadController.renameUploadedFiles, (req, res) => {
    // Handles file upload
    console.log(req.body); // Logs text fields
    console.log(req.files); // Logs files
    res.json({ message: "File(s) uploaded successfully", files: req.files });
});

module.exports = router;
