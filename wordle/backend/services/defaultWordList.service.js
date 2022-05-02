let DefaultWordlist = require('../models/DefaultWordlist.model')
/**
 * Gets the default word list from database, selecting words based on difficullty
 * @param {String} difficulty 
 * @returns array containing only the words from the db
 */
 const getDefaultWordlist = async function (difficulty) {

    try {
        let filter = difficulty === 'all' ? {} : {key:difficulty};
        let projection = 'word -_id';
        let wordlist = await DefaultWordlist.find(filter).select(projection).exec();
        wordlist = wordlist.map((entry) => entry.word);
        return wordlist;
    } catch (e) {
        throw Error(`Error getting default Word List`);
    }
}

module.exports = {getDefaultWordlist};