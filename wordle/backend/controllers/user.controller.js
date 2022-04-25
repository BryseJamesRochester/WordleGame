const User = require('../models/user.model');
const UserService = require('../services/user.service');
const CustomWordListService = require('../services/customWordList.service')


/**
 * Adds a user to the database.
 * Request Parameters:
 *  req.body.username - name of the user
 */
const addUser = async function (req, res, next) {
    try {
        const username = req.body.username;

        await UserService.addUser(username);
        return res.status(200).json('User added');

    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

/**
 * Gets a user from the database.
 * Request Parameters:
 *  req.body.username - name of the user
 */
const getUser = async function (req, res, next) {
    try {
        const username = req.body.username;

        let user = await UserService.getUser(username);

        return res.status(200).json(user);

    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

/**
 * Adds a word list to the specified users array of custom word lists.
 * Request Parameters:
 *  req.body.username - name of the user adding the word list
 *  req.body.wordListName - name of the word list.
 *  req.body.wordList - array of words to be included in the word list. Words must all be the same length.
 */
const addWordList = async function (req, res, next) {
    const username = req.body.username;
    const wordListName = req.body.wordListName;
    const wordList = req.body.wordList;
    try {
        await CustomWordListService.addWordList(username, wordListName, wordList);
        return res.status(200).json('Wordlist added');

    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

/**
 * Retrieves all of the user's custom word lists
 * Request Parameters:
 *  req.body.username - name of the user
 */
const getAllWordLists = async function (req, res, next) {
    const username = req.body.username;

    try {
        let wordlists = await CustomWordListService.getAllWordLists(username)
        return res.status(200).json(wordlists);
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

/**
 * Deletes the word list from the user's array of custom word lists.
 * Request Parameters:
 *  req.body.username - name of the user adding the word list
 *  req.body.wordListName - name of the word list.
 */
const deleteWordListByName = async function (req, res, next) {
    const username = req.body.username;
    const wordListName = req.body.wordListName;

    try {
        await CustomWordListService.deleteWordListByName(username, wordListName);
        return res.status(200).json(`Deleted word list`);
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

module.exports = { addUser, getUser, addWordList, getAllWordLists, deleteWordListByName };