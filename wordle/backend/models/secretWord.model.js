const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const secretWordSchema = new Schema({
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

const SecretWord = mongoose.model('SecretWord', secretWordSchema);
module.exports = SecretWord;