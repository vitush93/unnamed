const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect(process.env.MONGO_CONNECTION_STRING);

module.exports = mongoose;