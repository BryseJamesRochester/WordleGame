const User = require('../models/user.model');
const UserService = require('../services/user.service');
const CustomWordListService = require('../services/customWordList.service')

const addUser = async function (req, res, next) {
    try {
        const username = req.body.username;

        await UserService.addUser(username);
        return res.status(200).json('User added');

    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

const getUser = async function (req, res, next) {
    try {
        const username = req.body.username;

        let user = await UserService.getUser(username);

        return res.status(200).json(user);

    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

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

const getAllWordLists = async function (req, res, next) {
    const username = req.body.username;

    try {
        let wordlists = await CustomWordListService.getAllWordLists(username)
        return res.status(200).json(wordlists);
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

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