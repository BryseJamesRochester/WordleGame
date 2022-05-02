const { User } = require('../models/user.model');


const createWordlist = async function (username) {

    try {
        const allWordlists = await getAllWordlists(username);
        let wordlist = [];
        allWordlists.forEach(doc => {
            if (doc.enabled)
                wordlist = wordlist.concat(doc.words);
        });
        if (wordlist.length < 1)
            throw Error('No enabled Word Lists');
        return wordlist;
    } catch (e) {
        throw Error(`Error creating custom word list: ${e.message}`);
    }
}

/**
 * Gets all of the users word lists from database
 * @param {String} username 
 * @returns An array of all of the users word lists
 */
const getAllWordlists = async function (username) {

    try {
        const filter = { username: username };
        const projection = 'wordlists -_id';
        const wordlistsDoc = await User.findOne(filter).select(projection).exec();
        return wordlistsDoc.wordlists;
    } catch (e) {
        throw Error(`Error getting ${username}'s Word Lists`);
    }
}

/**
 * Creates a wordlist out of the specified words and adds that wordlist to the users array of word lista.
 * @param {String} username - name of the user
 * @param {String} wordlistName  - name of the word list
 * @param {[String]} words - array of words to be used in the word list
 */
const addWordlist = async function (username, wordlistName, words) {
    const wordLength = words[0].length;
    words.forEach(word => {
        if (word.length != wordLength)
            throw Error('Words are not the same length');
    });
    const newWordlist = { name: wordlistName, words: words, wordLength: wordLength, enabled: false };
    try {
        const result = await User.updateOne({ username: username }, { $push: { wordlists: newWordlist } });
        return;
    } catch (e) {
        throw Error(`Error adding ${username}'s Word List`);
    }
}

/**
 * Removes the specified word list from the users array of word lists
 * @param {String} username - name of the user
 * @param {String} wordlistName  - name of the word list
 */
const deleteWordlistByName = async function (username, wordlistName) {
    try {
        const result = await User.updateOne(
            { username: username },
            { $pull: { wordlists: { name: wordlistName } } }
        );
        return;
    } catch (e) {
        throw Error(`Error deleting ${username}'s ${wordlistName} Word List`);
    }
}

const enableWordlistByName = async function (username, wordlistName) {
    try {
        const allWordlists = await getAllWordlists(username);
        let wordLength = 0;
        let listToEnable = undefined;
        allWordlists.forEach(list => {
            if(list.enabled){
                if(wordLength==0)
                    wordLength = list.wordLength;
                else
                    if (wordLength!=list.wordLength)
                        list.enabled = false;
            }
            if (list.name == wordlistName) {
                listToEnable = list;
            }
        });
        if(listToEnable==undefined) throw Error(`List ${wordlistName} does not exist`);
        if (wordLength != 0 && wordLength != listToEnable.wordLength) throw Error(`List ${wordlistName} is not same length as other enabled lists`);
        await User.updateOne(
            { username: username, "wordlists.name": wordlistName },
            { $set: { "wordlists.$.enabled": true } }
        );
        return;
    } catch (e) {
        throw Error(`Error enabling word list ${wordlistName}: ${e.message}`);
    }
}

const disableWordlistByName = async function (username, wordlistName) {
    try {
        await User.updateOne(
            { username: username, "wordlists.name": wordlistName },
            { $set: { "wordlists.$.enabled": false } }
        );
        return;
    } catch (e) {
        throw Error(`Error disabling word list ${wordlistName}`);
    }
}

module.exports = { getAllWordlists, addWordlist, deleteWordlistByName, enableWordlistByName, disableWordlistByName, createWordlist };