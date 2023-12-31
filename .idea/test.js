// Importez la configuration de la base de données depuis un fichier db.js
const pool = require('./db.js');

// Créez un nouvel utilisateur
const newUser = {
    username: 'john_doe',
    email: 'john@example.com',
    password: 'root',
};

// Requête d'insertion dans la table users
const query = {
    text: 'INSERT INTO users(username, email, password) VALUES($1, $2, $3) RETURNING *',
    values: [newUser.username, newUser.email, newUser.password],
};

// Exécutez la requête
pool.query(query, (error, result) => {
    if (error) {
        console.error('Erreur lors de la création de l\'utilisateur :', error);
    } else {
        console.log('Nouvel utilisateur créé :', result.rows[0]);
    }
});


createUserExample(); // Appel de la fonction pour créer un utilisateur au moment de l'exécution
