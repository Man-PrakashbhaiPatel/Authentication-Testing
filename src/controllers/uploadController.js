const cloudinary = require('../config/cloudinary');

const uploadImage = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  try {
    // Since we receive the file in memory buffer, we need to use a upload stream directly to Cloudinary
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: 'products',
      },
      (error, result) => {
        if (error) {
          console.error(error);
          return res.status(500).json({ message: 'Cloudinary upload failed' });
        }
        res.status(200).json({
          message: 'Image uploaded successfully',
          url: result.secure_url,
          public_id: result.public_id
        });
      }
    );

    const streamifier = require('stream');
    let bufferStream = new streamifier.PassThrough();
    bufferStream.end(req.file.buffer);
    bufferStream.pipe(stream);
    
  } catch (error) {
    console.error('Upload Error:', error);
    res.status(500).json({ message: 'Server error during file upload' });
  }
};

module.exports = { uploadImage };
