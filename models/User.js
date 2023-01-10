const { default: mongoose } = require('mongoose');
const mogoose = require('mongoose');

const bcypt = require('bcrypt');

const userSchema = new mongoose.Schema({ 
    username: {
        type: String,
        required: true, 
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }

});

userSchema.pre('save', function(next) {

    bcypt.hash(this.password, 10)
    .then(hasedPassword =>{
        this.password = hasedPassword;
        next();
    });

});

const User = mongoose.model('User', userSchema);

module.exports = User;