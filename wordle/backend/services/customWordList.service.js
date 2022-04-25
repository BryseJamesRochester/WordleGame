const { User } = require('../models/user.model');


/**
 * Gets all of the users word lists from database
 * @param {String} username 
 * @returns An array of all of the users word lists
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

/**
 * Creates a wordlist out of the specified words and adds that wordlist to the users array of word lista.
 * @param {String} username - name of the user
 * @param {String} wordListName  - name of the word list
 * @param {[String]} words - array of words to be used in the word list
 */
const addWordList = async function (username, wordListName, words) {
    let wordLength = words[0].length;
    words.forEach(word => {
        if (word.length != wordLength)
            throw Error('Words are not the same length');
    });
    const newWordList = { name: wordListName, words: words, wordLength: wordLength, enabled: false };
    try {
        let result = await User.updateOne({ username: username }, { $push: { wordLists: newWordList } });
        return;
    } catch (e) {
        throw Error(`Error adding ${username}'s Word List`);
    }
}

/**
 * Removes the specified word list from the users array of word lists
 * @param {String} username - name of the user
 * @param {String} wordListName  - name of the word list
 */
const deleteWordListByName = async function (username, wordListName) {
    try {
        let result = await User.updateOne(
            { username: username },
            { $pull: { wordLists: { name: wordListName } } }
        );
        return;
    } catch (e) {
        throw Error(`Error deleting ${username}'s ${wordListName} Word List`);
    }
}

const enableWordListByName = async function (username, wordListName) {
    try {
        await User.updateOne(
            { username: username, "wordLists.name": wordListName },
            { $set: { "wordLists.$.enabled": true } }
        );
        return;
    } catch (e) {
        throw Error(`Error enabling word list ${wordListName}`);
    }
}

const disableWordListByName = async function (username, wordListName) {
    try {
        await User.updateOne(
            { username: username, "wordLists.name": wordListName },
            { $set: { "wordLists.$.enabled": false } }
        );
        return;
    } catch (e) {
        throw Error(`Error disabling word list ${wordListName}`);
    }
}

module.exports = { getAllWordLists, addWordList, deleteWordListByName, enableWordListByName, disableWordListByName };