let { User } = require('../models/user.model');

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

const updateUserGameState = async function (username, gamestate) {
    try {
        await User.updateOne({ username: username }, { gamestate: gamestate });
        return true;
    } catch (e) {
        throw Error(`Error updating ${username} gamestate`);
    }
}

const addUser = async function (username) {
    try {
        const newUser = new User({ username });
        return await newUser.save();
    } catch (e) {
        throw Error(`Error adding user. Meesage: ${e.message}`);
    }
}

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