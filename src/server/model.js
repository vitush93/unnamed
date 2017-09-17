const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect(process.env.MONGO_CONNECTION_STRING);

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    email: String,
    avatar: String,
    token: String
});

const itemSchema = new Schema({
    user: userSchema,
    title: String,
    url: String,
    tags: [{
        name: String,
        count: Number
    }],
    created: {
        type: Date, default: Date.now
    },
    approved: Boolean
});

exports.User = mongoose.model('User', userSchema);
exports.Item = mongoose.model('Item', itemSchema);