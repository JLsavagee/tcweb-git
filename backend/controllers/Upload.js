// backend/controllers/Upload.js
const multer = require('multer');
const path = require('path');
const fs = require('fs').promises;

// Set up storage options
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../uploaded_files'));
        // Ensure this directory exists or is created
    },
    filename: function (req, file, cb) {
        // Use a temporary filename; we'll rename it later
        const tempFilename = 'temp_' + Date.now() + path.extname(file.originalname);
        cb(null, tempFilename);
    },
});

const upload = multer({ storage: storage });

// Middleware to rename the file after upload
// Asynchronously rename files after upload
const renameUploadedFiles = async (req, res, next) => {
  if (req.files) {
    try {
      for (let file of req.files) {
        const newFilename = `${req.body.name}-${req.body.surname}-${req.body.position}-${req.body.trikotnummer}${path.extname(file.originalname)}`;
        const newPath = path.join(file.destination, newFilename);
        await fs.rename(file.path, newPath);
        // Update file properties for response
        file.originalname = newFilename;
        file.filename = newFilename;
        file.path = newPath;
      }
      next(); // Proceed to next middleware or response handler
    } catch (error) {
      next(error); // Forward error to Express error handling middleware
    }
  } else {
    next(); // No files to process, proceed
  }
};

exports.renameUploadedFiles = renameUploadedFiles;

// Export the upload function to be used as middleware
exports.uploadFiles = (req, res, next) => {
    const uploader = upload.array("files"); // Define the multer uploade
    uploader(req, res, function(err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json({ error: err.message });
        } else if (err) {
           return res.status(500).json({ error: err.message });
        }
        next();
  });
};

