const jwt = require('jsonwebtoken');
const User = require('../models/UserSchema');

const protect = async (req, res, next) => {
    let token = req.headers.authorization; 
    if (token && token.startsWith('Bearer')) {
        try {
            token = token.split(' ')[1]; 
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const user = await User.findById(decoded.id).select('-password');
            if (!user) {
                return res.status(401).json({message: 'User not found'});
            }
            req.user = user;
            next();
        } catch (err) {
            return res.status(401).json({message: 'Invalid token'});
        }
    } else {
        return res.status(401).json({message: 'Token is missing'});
    }
}; 


module.exports = {protect};
