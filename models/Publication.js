const mongoose = require('mongoose');

const publicationSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    paintingTechinque :{
        type: String,
        required: true
    },
    artPicture :{
        type: String,
        required: true
    },
    cerification :{
        type: String,
        enum: ['Yes', 'No'],
        required: true
    },
    author : {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    usersShared : [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }]
});

const Publicaton = mongoose.model('Publicaton', publicationSchema);

module.exports = Publicaton;