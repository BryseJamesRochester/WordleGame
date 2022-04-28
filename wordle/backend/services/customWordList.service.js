const { User } = require('../models/user.model');


const createWordList = async function (username) {

    try {
        const allWordLists = await getAllWordLists(username);
        let wordList = [];
        allWordLists.forEach(doc => {
            if (doc.enabled)
                wordList = wordList.concat(doc.words);
        });
        if (wordList.length < 1)
            throw Error('No enabled Word Lists');
        return wordList;
    } catch (e) {
        throw Error(`Error creating custom word list: ${e.message}`);
    }
}

/**
 * Gets all of the users word lists from database
 * @param {String} username 
 * @returns An array of all of the users word lists
 */
const getAllWordLists = async function (username) {

    try {
        const filter = { username: username };
        const projection = 'wordLists -_id';
        const wordListsDoc = await User.findOne(filter).select(projection).exec();
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
    const wordLength = words[0].length;
    words.forEach(word => {
        if (word.length != wordLength)
            throw Error('Words are not the same length');
    });
    const newWordList = { name: wordListName, words: words, wordLength: wordLength, enabled: false };
    try {
        const result = await User.updateOne({ username: username }, { $push: { wordLists: newWordList } });
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
        const result = await User.updateOne(
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
        const allWordLists = await getAllWordLists(username);
        let wordLength = 0;
        let listToEnable = undefined;
        allWordLists.forEach(list => {
            if(list.enabled){
                if(wordLength==0)
                    wordLength = list.wordLength;
                else
                    if (wordLength!=list.wordLength)
                        list.enabled = false;
            }
            if (list.name == wordListName) {
                listToEnable = list;
            }
        });
        if(listToEnable==undefined) throw Error(`List ${wordListName} does not exist`);
        if (wordLength != 0 && wordLength != listToEnable.wordLength) throw Error(`List ${wordListName} is not same length as other enabled lists`);
        await User.updateOne(
            { username: username, "wordLists.name": wordListName },
            { $set: { "wordLists.$.enabled": true } }
        );
        return;
    } catch (e) {
        throw Error(`Error enabling word list ${wordListName}: ${e.message}`);
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

module.exports = { getAllWordLists, addWordList, deleteWordListByName, enableWordListByName, disableWordListByName, createWordList };