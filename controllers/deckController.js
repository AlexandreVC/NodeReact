const { Deck } = require('../models');

exports.createDeck = async (req, res) => {
    try {
        const newDeck = await Deck.create(req.body);
        res.status(201).json(newDeck);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create user', error: error.message });
    }
};