const jwt = require('jsonwebtoken');
const User = require('../models/UserSchema');

const generateToken = (userId) => {
    return jwt.sign({id: userId},process.env.JWT_SECRET, {expiresIn: '1h'});
};

const registerUser = async (req, res) => {
    const {name, email, password} = req.body;
    try{
        const existing = await User.findOne({email});
        if(existing){
            return res.status(400).json({message: 'Email already exists'});
        }

        const user = await User.create({name, email, password});
        const token = generateToken(user._id);
        res.status(201).json({ token, user: { id: user._id, name: user.name, email: user.email } });
        } catch (error) {
            res.status(500).json({ message: error.message });
    }  
};

const loginUser = async (req, res) => {
    const {email, password} = req.body;
    try{
        const user = await User.findOne({email});
        if(!user){
            return res.status(401).json({message: 'Invalid email or password'});
        }

        const isMatch = await user.comparePassword(password);
        if(!isMatch){
            return res.status(401).json({message: 'Invalid email or password'});
        }

        const token = generateToken(user._id);
        res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }

};

const getUser = async (req, res) => {
    const user = await User.findById(req.user.id).select('-password');
    res.json({ user });
}
module.exports = {registerUser, loginUser, getUser};