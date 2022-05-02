let { User } = require('../models/user.model');

/**
 * Gets the user's current gamestate
 * @param {String} username - name of the user 
 * @returns a gamestate object
 */
const getUserGameState = async function (username) {

    try {
        let filter = { username };
        let projection = 'gamestate -_id';
        let doc = await User.findOne(filter).select(projection).exec();
        gamestate = doc.gamestate;
        return gamestate;
    } catch (e) {
        throw Error(`Error getting ${username} gamestate`);
    }
}
/**
 * Updates the users current gamestate
 * @param {String} username - name of the user 
 * @param {Object} gamestate - object that details current gamestate. Includes secretWord, guessesRemaining, result, and pastGuesses 
 */
const updateUserGameState = async function (username, gamestate) {
    try {
        await User.updateOne({ username: username }, { gamestate: gamestate });
        return;
    } catch (e) {
        throw Error(`Error updating ${username} gamestate`);
    }
}

/**
 * Creates a user with the specified username, password, and email and adds it to the database. 
 * @param {String} username - name of the user 
 * @returns 
 */
const addUser = async function (username, password, email) {
    try {
        const newUser = new User({ username:username, password:password, email:email });
        return await newUser.save();
    } catch (e) {
        throw Error(`Error adding user. Message: ${e.message}`);
    }
}

/**
 * Gets the user from the database
 * @param {String} username - name of the user 
 * @returns User object
 */
const getUser = async function (username) {
    try {
        let filter = { username };
        let doc = await User.findOne(filter).exec();
        return doc;
    } catch (e) {
        throw Error(`Error getting user ${username}`);
    }
}



module.exports = { getUserGameState, updateUserGameState, addUser, getUser };