const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { JWT_SECRET } = require('../crypto/config');  

function generateToken(user) {
    return jwt.sign({ user: user.id }, JWT_SECRET, { expiresIn: '1h' });
}

function verifyToken(req, res, next) {
    const token = req.session.token;
    if (!token) {
        return res.status(404).json({ message: 'Token no proporcionado' });
    }

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Token inválido', error: err.message });
        }
        req.user = decoded.user;
        next();
    });
}

module.exports = { generateToken, verifyToken };
