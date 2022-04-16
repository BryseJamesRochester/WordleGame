const UserService = require('../services/user.service');

const addUser = async function(req, res, next) {
    try {
        const username = req.body.username;
    
        await UserService.addUser(username);
    
    } catch(e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

module.exports = {getAllUsers, addUser};