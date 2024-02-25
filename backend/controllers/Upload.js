const multer = require('multer');
const path = require('path');

// Set up multer for file storage
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploaded_files/'); // The folder where files will be saved
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname); // Format filename
  }
});

// Filter file types
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5 // Limit of 5MB
  },
  fileFilter: fileFilter
});

// Upload function
exports.uploadFile = (req, res, next) => {
  console.log("Upload endpoint hit"); // To confirm the route is hit
  const uploader = upload.single('file');
  uploader(req, res, function(err) {
    if (err instanceof multer.MulterError) {
      console.error("Multer error:", err);
      return res.status(500).json(err);
    } else if (err) {
      console.error("Unknown error:", err);
      return res.status(500).json(err);
    }
    console.log("File uploaded successfully");
    return res.status(200).send({ message: "Upload successful", file: req.file });
  });
};

