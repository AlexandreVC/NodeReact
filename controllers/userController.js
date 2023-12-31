const {Users} = require('../models');

exports.createUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ message: 'Username, email, and password are required' });
        }
        const newUser = await Users.create({
            username,
            email,
            password
        });

        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create user', error: error.message });
    }
};
