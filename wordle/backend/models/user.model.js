const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pastGuessSchema = Schema({ guess: String, matches: [Number] }, { _id: false });
const gamestateSchema = Schema({ secretWord: String, remainingGuesses: Number, result: String, pastGuesses: [pastGuessSchema] }, { _id: false });


const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength: 4
    },
    gamestate: gamestateSchema,
    wordLists: [{
        name: { type: String, unique: true },
        words: [String],
        wordLength: Number,
        enabled: Boolean
    },
    { _id: false }
    ]
}, {
    timestamps: true,
});



const User = mongoose.model('User', userSchema);
module.exports = { User };