let DefaultWordList = require('../models/DefaultWordList.model')
/**
 * Gets the default word list from database, selecting words based on difficullty
 * @param {String} difficulty 
 * @returns array containing only the words from the db
 */
 const getDefaultWordList = async function (difficulty) {

    try {
        let filter = difficulty === 'all' ? {} : {key:difficulty};
        let projection = 'word -_id';
        let wordList = await DefaultWordList.find(filter).select(projection).exec();
        wordList = wordList.map((entry) => entry.word);
        return wordList;
    } catch (e) {
        throw Error(`Error getting default Word List`);
    }
}

module.exports = {getDefaultWordList};