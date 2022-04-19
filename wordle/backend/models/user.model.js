const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const pastGuessSchema = Schema({guess:String, matches:[Number]}, {_id:false});
const gamestateSchema = Schema({secretWord: String, remainingGuesses: Number, result:String, pastGuesses:[pastGuessSchema]}, {_id:false});
const wordListSchema = Schema({words: [String]}, {_id:false});

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength: 4
    },
    gamestate: gamestateSchema,
    wordLists: [wordListSchema]
}, {
    timestamps: true,
});



const User = mongoose.model('User', userSchema);
module.exports = User;