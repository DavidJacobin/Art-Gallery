const { default: mongoose } = require('mongoose');
const mogoose = require('mongoose');

const userSchema = new mongoose.Schema({ 
    username: {
        type: String,
    },
    password: {
        type: String
    },
    address: {
        type: String
    }

});

const User = mongoose.model('User', userSchema);

module.exports = User;