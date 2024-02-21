require('dotenv').config();
const jwt = require('jsonwebtoken');

const authenticate = async (req, res, next) => {
    const token = req.headers.authorization;

    if (!token || !token.startsWith('Bearer ')) {
        return res.status(401).json({
            message: 'Unauthorized: Invalid token format',
        });
    }

    const accessToken = token.split(' ')[1];

    jwt.verify(accessToken, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {

            if (err.name === 'TokenExpiredError') {
                return res.status(403).json({
                    message: 'Forbidden: Token has expired',
                });
            }

            return res.status(403).json({
                message: 'Forbidden: Invalid token',
            });
        }

        req.user = decoded;
        next();
    });
};

module.exports = authenticate;