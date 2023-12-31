const { Cards } = require('../models');

exports.createCard = async (req, res) => {
    try {
        const newCard = await Cards.create(req.body);
        res.status(201).json(newCard);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create user', error: error.message });
    }
};