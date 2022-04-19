const UserService = require('../services/user.service');

const addUser = async function(req, res, next) {
    try {
        const username = req.body.username;
    
        await UserService.addUser(username);
    
    } catch(e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

const getUser = async function(req, res, next) {
    try {
        const username = req.body.username;
    
        let doc = await UserService.getUser(username);

        return res.status(200).json(doc);
    
    } catch(e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

module.exports = {addUser, getUser};