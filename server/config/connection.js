const mongoose = require('mongoose');


//! Mongo_private_url might need to be reset
mongoose.connect(process.env.MONGO_PRIVATE_URL || 'mongodb://127.0.0.1:27017/googlebooks');

module.exports = mongoose.connection;
