const mongoose = require('mongoose');

// Use the MONGO_PRIVATE_URL environment variable provided by Railway
const mongoDBUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/googlebooks';

mongoose.connect(mongoDBUri);

module.exports = mongoose.connection;
