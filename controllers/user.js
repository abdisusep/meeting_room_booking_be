require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const { User } = require('../models');

const secretKey = process.env.SECRET_KEY;

const loginUser = async (req, res) => {

    try {
        const { email, password } = req.body;
    
        const user = await User.findOne({
          where: {
            email: email
          }
        });
    
        if (!user || !bcrypt.compareSync(password, user.password)) {
          return res.status(401).json({ error: 'Invalid credentials' });
        }
    
        const token = jwt.sign({ userId: user.id, email: user.email }, secretKey, { expiresIn: '1h' });
    
        res.status(200).json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = { loginUser }