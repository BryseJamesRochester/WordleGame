const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//const pastGuessSchema = Schema({ guess: String, matches: [Number] }, { _id: false });
//const gamestateSchema = Schema({ secretWord: String, remainingGuesses: Number, result: String, pastGuesses: [String] }, { _id: false });

//username, password, email, stats, gamestate, wordlists
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength: 4
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    stats: {
        gamesPlayed: { type: Number, default: 0 },
        gamesWon: { type: Number, default: 0 },
        multiplayerGamesPlayed: { type: Number, default: 0 },
        multiplayerGamesWon: { type: Number, default: 0 }
    },
    gamestate: {
        secretWord: String,
        remainingGuesses: Number,
        result: String,
        pastGuesses: [{
            _id:false,
            guess:String, 
            matches:[Number]
        }]
    },
    wordlists: [{
        name: String,
        words: [String],
        wordLength: Number,
        enabled: Boolean
    },
    { _id: false }
    ]
}, {
    timestamps: true,
    collection: 'users'
});

const User = mongoose.model('User', userSchema);
module.exports = { User };