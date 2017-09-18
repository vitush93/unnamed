const mongoose = require('./mongoose');
const validUrl = require('valid-url');

const Schema = mongoose.Schema;


const userSchema = new Schema({

    username: {
        type: String,
        required: true,
        unique: true,
    },

    email: {
        type: String,
        unique: true,
    },

    avatar: {
        type: String,
    },

    token: {
        type: String,
        required: true,
        unique: true,
    },

    role: {
        type: String,
        enum: ['user', 'mod', 'admin'],
        default: 'user',
        required: true,
    }
}, {
    timestamps: true
});


const itemSchema = new Schema({

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    title: {
        type: String,
        required: true,
    },

    url: {
        type: String,
        required: true,
        validate: {
            validator: (url) => {
                return validUrl.isWebUri(url)
            },
            message: '{VALUE} is not a valid URL!',
        }
    },

    tags: [{
        name: {
            type: String,
            required: true,
        },
        count: {
            type: String,
            required: true,
        }
    }],

    created: {
        type: Date,
        default: Date.now,
        required: true,
    },

    approved: {
        type: Boolean,
        default: false,
        required: true,
    }
}, {
    timestamps: true
});


exports.User = mongoose.model('User', userSchema);
exports.Item = mongoose.model('Item', itemSchema);