const mongoose = require('mongoose');

const CatSchema = mongoose.Schema({
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'users'
    // },
    name: {
        type: String,
        required: true
    },
    images: [{
        type: String,
    }],
    sex: {
        type: String,
        required: true,
    },
    about: {
        type: String,
    },
    badges: [{
        type: String,
    }]
});

module.exports = mongoose.model('cat', CatSchema);