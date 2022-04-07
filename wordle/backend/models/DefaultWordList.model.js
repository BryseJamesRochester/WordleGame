const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const defaultWordListSchema = new Schema({
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

const DefaultWordList = mongoose.model('DefaultWordList', defaultWordListSchema);
module.exports = DefaultWordList;