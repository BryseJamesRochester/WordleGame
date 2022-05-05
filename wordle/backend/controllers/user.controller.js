//const User = require('../models/user.model');
const UserService = require('../services/user.service');
const CustomWordlistService = require('../services/customWordlist.service');
const EncryptionService = require('../services/encryption.service');
const { User } = require('../models/user.model');


/**
 * Adds a user to the database.
 * Request Parameters:
 *  req.params.username - name of the user
 *  req.body.password - the user's password
 *  req.body.email - a valid email address
 */
const addUser = async function (req, res, next) {
    const username = req.params.username;
    const password = req.body.password;
    const email = req.body.email;

    try {
        if (username == undefined) throw Error('Username not defined');
        if (password == undefined) throw Error('Password not defined');
        if (email == undefined) throw Error('Email not defined');
        let pwHash = await EncryptionService.hashPassword(password);//hash and salt pw
        await UserService.addUser(username, pwHash, email);
        return res.status(200).json('User added');

    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

const getUserGameState = async function(req, res, next) {
    const username = req.params.username;

    try{
        let gamestate = await UserService.getUserGameState(username);
        //return res.status(200).json(gamestate);
        if(gamestate.result=="Active")
            return res.status(200).json({gamestate:gamestate, active:true});
        else
            return res.status(200).json({message:'No Active Game', active:false});
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

const getProfilePageInfo = async function (req, res, next) {
    const username = req.params.username;

    try {
        const user = await UserService.getUser(username);
        const profileInfo = {username:username, email:user.email, stats:user.stats, wordlists:user.wordlists};
        return res.status(200).json(profileInfo);
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

/**
 * Gets a user from the database.
 * Request Parameters:
 *  req.params.username - name of the user
 */
const getUser = async function (req, res, next) {
    try {
        const username = req.params.username;

        let user = await UserService.getUser(username);

        return res.status(200).json(user);

    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

/**
 * Adds a word list to the specified users array of custom word lists.
 * Request Parameters:
 *  req.params.username - name of the user adding the word list
 *  req.body.wordlistName - name of the word list.
 *  req.body.wordlist - array of words to be included in the word list. Words must all be the same length.
 */
const addWordlist = async function (req, res, next) {
    const username = req.params.username;
    const wordlistName = req.body.wordlistName;
    const wordlist = req.body.wordlist;
    try {
        await CustomWordlistService.addWordlist(username, wordlistName, wordlist);
        return res.status(200).json('Wordlist added');

    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

/**
 * Retrieves all of the user's custom word lists
 * Request Parameters:
 *  req.params.username - name of the user
 */
const getAllWordlists = async function (req, res, next) {
    const username = req.params.username;

    try {
        let wordlists = await CustomWordlistService.getAllWordlists(username)
        return res.status(200).json(wordlists);
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

/**
 * Deletes the word list from the user's array of custom word lists.
 * Request Parameters:
 *  req.params.username - name of the user adding the word list
 *  req.body.wordlistName - name of the word list.
 */
const deleteWordlist = async function (req, res, next) {
    const username = req.params.username;
    const wordlistName = req.body.wordlistName;

    try {
        await CustomWordlistService.deleteWordlistByName(username, wordlistName);
        return res.status(200).json(`Deleted word list`);
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

const enableWordlists = async function (req, res, next) {
    const username = req.params.username;
    const wordlistNames = req.body.wordlistNames;
    try {
        const wordlists = await CustomWordlistService.getAllWordlists(username);
        const allNames = wordlists.map(list => {return list.name});
        const enabledLists = wordlists.map(list => {if(list.enabled) return list.name});
        allNames.forEach(name => {
            if (wordlistNames.includes(name)&&!enabledLists.includes(name))
                CustomWordlistService.enableWordlistByName(username, name);
            else if (!wordlistNames.includes(name) && enabledLists.includes(name))
                CustomWordlistService.disableWordlistByName(username, name)
        });
        return res.status(200).json(`Enabled word lists`);
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

/*
const disableWordlist = async function (req, res, next) {
    const username = req.params.username;
    const wordlistName = req.body.wordlistName;
    try {
        await CustomWordlistService.disableWordlistByName(username, wordlistName);
        return res.status(200).json(`Disabled word list ${wordlistName}`);
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}*/

module.exports = { addUser, getUser, addWordlist, getAllWordlists, deleteWordlist, enableWordlists, getProfilePageInfo, getUserGameState };