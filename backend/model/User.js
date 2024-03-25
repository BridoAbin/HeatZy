const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    bio: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    profileImg: {
        type: String // Assuming you will store the path to the image file
        // If you want to store the image data itself, you can use Buffer type
        // type: Buffer
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
