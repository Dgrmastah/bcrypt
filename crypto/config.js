const crypto = require('crypto');
const bcrypt = require('bcrypt');

const secret = crypto.randomBytes(64).toString('hex');  
const hashedSecret = bcrypt.hashSync(secret, 10);

module.exports = {
    PORT: 3000,
    SESSION_SECRET: hashedSecret,
    JWT_SECRET: hashedSecret,  
    JWT_EXPIRATION: '1h',
};
