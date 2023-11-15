const mongoose = require('mongoose');

// Use the MONGO_PRIVATE_URL environment variable provided by Railway
const mongoDBUri = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/googlebooks';
//! switched to regular instead of private url
mongoose.connect(mongoDBUri, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose.connection;
