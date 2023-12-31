const { cards } = require('../models');
const sequelize = require('../config/config.json');

exports.getRandomCardByDeckId = async (req, res) => {
    try {
        const { deckId } = req.params; // Récupère deckId depuis les paramètres de l'URL

        const randomCard = await cards.findOne({
            where: { deckId },
            order: sequelize.random(),
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
