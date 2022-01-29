const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({

    fullName: {
        type: String,
        required: [true, "Title is required"],
        minlength: [3, "Title must be at least 3 characters"]
    },
}, { timestamps: true });

module.exports.Author = mongoose.model('Author', AuthorSchema);