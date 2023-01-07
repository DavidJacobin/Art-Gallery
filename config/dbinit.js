const mogoose = require('mongoose');

exports.dbInit = () => {
    mogoose.connection.on('open', () => console.log('DB is on!'))


    return mogoose.connect('mongodb://127.0.0.1:27017/art-gallery',{useNewUrlParser: true})
};
