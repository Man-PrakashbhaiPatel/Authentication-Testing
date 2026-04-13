const mongoose = require('mongoose');

const initDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      // New parser options are no longer strictly required in Mongoose 6+, but good to have
    });

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB connection failed: ${error.message}`);
    // process.exit(1);
  }
};

module.exports = { initDb };
