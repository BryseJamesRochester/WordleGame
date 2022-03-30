let DefaultWordList = require('../models/DefaultWordList.model')

exports.getDefaultWordList = async function (difficulty) {

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