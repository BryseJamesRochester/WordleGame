const bcrypt = require('bcrypt');

const saltRounds = 10;

const hashPassword = async function (password) {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
    return hash;
}

const verify = async function (attempt, hash) {
    return await bcrypt.compare(attempt, hash);
}

module.exports = { hashPassword, verify }
