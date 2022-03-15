const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const wordleWordSchema = new Schema({
    word: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength: 5
    },
}, {
    timestamps: true,
});

const WordleWord = mongoose.model('WordleWord', wordleWordSchema);
module.exports = WordleWord;