const {users} = require('../models');

exports.createUser = async (req, res) => {
    try {
        const newUser = await users.create(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create user', error: error.message });
    }
};
