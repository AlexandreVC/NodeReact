const { Cards, Deck} = require('../models');
const {Sequelize}=require('sequelize')
exports.getRandomCardByDeckId = async (req, res) => {
    try {
        const { deckId } = req.params;

        const randomCard = await Cards.findOne({
            where: { deckId },
            order: Sequelize.literal('random()'),
            attributes: ['question', 'answer']
        });

        if (!randomCard) {
            return res.status(404).json({ message: 'Card not found' });
        }

        res.status(200).json(randomCard);
    } catch (error) {
        res.status(500).json({ message: 'Failed to get random card', error: error.message });
    }
};

exports.getAllCardsByDeckId = async (req, res) => {
    try {
        const { deckId } = req.params;

        const allCards = await Cards.findAll({
            where: { deckId },
            attributes: ['question', 'answer']
        });

        if (!allCards || allCards.length === 0) {
            return res.status(404).json({ message: 'No cards found for this deck' });
        }

        res.status(200).json(allCards);
    } catch (error) {
        res.status(500).json({ message: 'Failed to get cards for this deck', error: error.message });
    }
};
exports.getAllCards = async (req, res) => {
    try {
        if (!Cards) {
            return res.status(500).json({ message: 'Deck model not found' });
        }

        const allCards = await Cards.findAll();

        res.status(200).json(allCards);
    } catch (error) {
        res.status(500).json({ message: 'Failed to get cards', error: error.message });
    }
};