const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
var userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
});
userSchema.pre('save', async function (next) {
    const user = this;
    console.log(user);
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
});


module.exports = mongoose.model("user", userSchema);