const UserService = require('../services/user.service');
const EncryptionService = require('../services/encryption.service');

const login = async function(req, res, next) {
    const username = req.params.username;
    const password = req.body.password;
    try {
        if (username == undefined) throw Error('Username not defined');
        if (password == undefined) throw Error('Password not defined');
        const user = await UserService.getUser(username);
        const hash = user.password;
        const success = await EncryptionService.verify(password, hash);
        if (success) return res.status(200).json('Successful login');
        else return res.status(200).json('Unsuccessful login');
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

module.exports = { login }