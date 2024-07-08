const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    age: {
        type: String,
        required: true,
    },
    totalBooks: {
        type: Number,
        required: true,
        default: 0
    },
    description: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Author', authorSchema);
