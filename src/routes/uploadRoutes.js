const express = require('express');
const upload = require('../middlewares/uploadMiddleware');
const { uploadImage } = require('../controllers/uploadController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

// Here we protect the upload route so only authenticated users can upload an image
// We also use multer memory upload via `upload.single('image')`
router.post('/image', protect, upload.single('image'), uploadImage);

module.exports = router;
