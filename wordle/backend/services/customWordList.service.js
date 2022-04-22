const { User } = require('../models/user.model');


/**
 * Gets all of the users word lists from database
 * @param {String} username 
 * @returns 
 */
const getAllWordLists = async function (username) {

    try {
        let filter = { username: username };
        let projection = 'wordLists -_id';
        let wordListsDoc = await User.findOne(filter).select(projection).exec();
        return wordListsDoc.wordLists;
    } catch (e) {
        throw Error(`Error getting ${username}'s Word Lists`);
    }
}

const addWordList = async function (username, wordListName, words) {
    let wordLength = words[0].length;
    words.forEach(word => {
        if (word.length != wordLength)
            throw Error('Words are not the same length');
    });
    const newWordList = { name: wordListName, words: words, wordLength: wordLength, enabled: false };
    try {
        let result = await User.updateOne({ username: username }, { $push: { wordLists: newWordList } });
        return result.modifiedCount;
    } catch (e) {
        throw Error(`Error adding ${username}'s Word List`);
    }
}

const deleteWordListByName = async function (username, wordListName) {
    try {
        let result = await User.updateOne(
            { username: username },
            { $pull: { wordLists: { name: wordListName } } }
        );
        return result.modifiedCount;
    } catch (e) {
        throw Error(`Error deleting ${username}'s ${wordListName} Word List`);
    }
}

module.exports = { getAllWordLists, addWordList, deleteWordListByName };