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
