const User = require('../models/User');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.create = (userData) => User.create(userData);

exports.login = async (username, password) => {
    const user = await User.findOne({ username });

    if (!user) {
        throw { message: 'Can not find username or password!' }
    }

    const isvalid = bcrypt.compare(password, user.password)

    if (!isvalid) {
        throw { message: 'Can not find username or password!' }
    }

    return user;

};

exports.createToken = (user) => {
    const payload = { _id: user._id, username: user.username, address: user.address }

    const tokenPromise = new Promise((resolve, reject) => {
        jwt.sign(payload, 'g2734t3eghe8293e', { expiresIn: '2d' }, (err, decToken) => {
            if (err) {
                return reject(err);
            }
            resolve(decToken);
        })

    })

    return tokenPromise
};