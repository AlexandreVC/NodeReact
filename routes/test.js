const {getAllDecks,getDeckId}  = require('./deckRoutes');
const{getRandomCardByDeckId,getAllCardsByDeckId,getAllCards}=require ('./cardRoutes')

const mockRequest = {};
const mockResponse = {
    status: function(code) {
        this.statusCode = code;
        return this; // Pour permettre le chaînage des méthodes
    },
    json: function(data) {
        console.log(data);
    }
};
const mockRequest2 = {
    params: {
        deckName: 'Sample Deck 3'
    }
};

const mockResponse2 = {
    statusCode: 200,
    status: function(code) {
        this.statusCode = code;
        return this;
    },
    json: function(data) {
        console.log(data);
    }
};
const mockRequest3 = {
    params: {
        deckId: 4
    }
};

const mockResponse3 = {
    statusCode: 200,
    status: function(code) {
        this.statusCode = code;
        return this;
    },
    json: function(data) {
        console.log(data);
    }
};
const mockRequest4 = {
    params: {
        deckId: 4
    }
};
const mockResponse4 = {
    status: function(code) {
        this.statusCode = code;
        return this; // Pour permettre le chaînage des méthodes
    },
    json: function(data) {
        console.log(data);
    }
};
//getDeckId(mockRequest2, mockResponse2);
//getAllDecks(mockRequest, mockResponse);
//getRandomCardByDeckId(mockRequest3,mockResponse3);
//getAllCardsByDeckId(mockRequest4,mockResponse4)
//getAllCards(mockRequest, mockResponse);

