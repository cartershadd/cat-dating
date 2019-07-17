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
    sex: {
        type: String,
        required: true,
    },
    about: {
        type: String,
    },
    // badges: {
    //     type: String,
    //     default: 'personal'
    // },
});

module.exports = mongoose.model('cat', CatSchema);