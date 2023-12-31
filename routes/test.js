const {getAllDecks}  = require('./deckRoutes');

// Simulez une requête et une réponse HTTP pour tester la fonction
const mockRequest = {};
const mockResponse = {
    status: function(code) {
        this.statusCode = code;
        return this; // Pour permettre le chaînage des méthodes
    },
    json: function(data) {
        console.log(data); // Affichage du résultat de la fonction dans la console
    }
};

// Appelez votre fonction avec la requête et la réponse simulées
getAllDecks(mockRequest, mockResponse);

const {getDeckId} = require('./deckRoutes'); // Assurez-vous de remplacer le chemin correctement

const mockRequest2 = {
    params: {
        deckName: 'Sample Deck 3' // Nom du deck pour lequel vous souhaitez obtenir l'ID
    }
};

const mockResponse2 = {
    statusCode: 200, // Initialisez le statut si nécessaire
    status: function(code) {
        this.statusCode = code;
        return this; // Pour permettre le chaînage des méthodes
    },
    json: function(data) {
        console.log(data); // Affichage du résultat de la fonction dans la console
    }
};

// Appelez votre fonction avec la requête et la réponse simulées
getDeckId(mockRequest2, mockResponse2);
