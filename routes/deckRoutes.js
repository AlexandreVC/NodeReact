const { Deck } = require('../models');

exports.getAllDecks = async (req, res) => {
    try {
        if (!Deck) {
            return res.status(500).json({ message: 'Deck model not found' });
        }

        const allDecks = await Deck.findAll();

        res.status(200).json(allDecks);
    } catch (error) {
        res.status(500).json({ message: 'Failed to get decks', error: error.message });
    }
};

exports.getDeckId = async (req, res) => {
    const { deckName } = req.params;

    try {
        const deck = await Deck.findOne({ where: { name: deckName } });

        if (!deck) {
            return res.status(404).json({ message: 'Deck not found' });
        }

        res.status(200).json({ deckId: deck.id });
    } catch (error) {
        res.status(500).json({ message: 'Failed to get deck ID', error: error.message });
    }
};
