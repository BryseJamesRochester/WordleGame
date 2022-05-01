const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const defaultWordlistSchema = new Schema({
    word: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength: 5
    },
    key: {
        type: String
    }
}, {
    collection: 'dictionary'
});

const DefaultWordlist = mongoose.model('DefaultWordlist', defaultWordlistSchema);
module.exports = DefaultWordlist;