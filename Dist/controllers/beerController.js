"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBeer = exports.updateBeer = exports.getBeerById = exports.getAllBeers = exports.createBeer = void 0;
const pg_1 = require("pg");
// Configurer le client PostgreSQL
const client = new pg_1.Client({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});
client.connect()
    .then(() => {
    console.log('Connexion réussie à la base de données PostgreSQL');
})
    .catch(err => {
    console.error('Erreur de connexion à PostgreSQL:', err);
});
// Créer une bière
const createBeer = (req, res) => {
    const { name, description, abv, brewery_id, category_id } = req.body;
    if (!name || !brewery_id || abv === undefined) {
        res.status(400).send('Le nom, l\'ABV, et l\'ID de brasserie sont requis');
        return;
    }
    const query = `
        INSERT INTO Beers (name, description, abv, brewery_id, category_id)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *;
    `;
    client.query(query, [name, description, abv, brewery_id, category_id], (err, result) => {
        if (err) {
            console.error('Erreur lors de l\'insertion dans la base de données:', err);
            res.status(500).send('Erreur serveur');
        }
        else {
            res.status(201).json(result.rows[0]);
        }
    });
};
exports.createBeer = createBeer;
// Lire toutes les bières
const getAllBeers = (req, res) => {
    client.query('SELECT * FROM Beers;', (err, result) => {
        if (err) {
            console.error('Erreur lors de la requête SQL:', err);
            res.status(500).send('Erreur serveur');
        }
        else {
            res.json(result.rows);
        }
    });
};
exports.getAllBeers = getAllBeers;
// Détails d'une bière par ID
const getBeerById = (req, res) => {
    const beerId = req.params.id;
    client.query('SELECT * FROM Beers WHERE id_beer = $1;', [beerId], (err, result) => {
        if (err) {
            console.error('Erreur lors de la requête SQL:', err);
            res.status(500).send('Erreur serveur');
        }
        else if (result.rows.length === 0) {
            res.status(404).send('Bière non trouvée');
        }
        else {
            res.json(result.rows[0]);
        }
    });
};
exports.getBeerById = getBeerById;
// Mettre à jour une bière
const updateBeer = (req, res) => {
    const beerId = req.params.id;
    const { name, description, abv, brewery_id, category_id } = req.body;
    const query = `
        UPDATE Beers
        SET name = $1, description = $2, abv = $3, brewery_id = $4, category_id = $5, updated_at = CURRENT_TIMESTAMP
        WHERE id_beer = $6
        RETURNING *;
    `;
    client.query(query, [name, description, abv, brewery_id, category_id, beerId], (err, result) => {
        if (err) {
            console.error('Erreur lors de la mise à jour de la bière:', err);
            res.status(500).send('Erreur serveur');
        }
        else if (result.rows.length === 0) {
            res.status(404).send('Bière non trouvée');
        }
        else {
            res.json(result.rows[0]);
        }
    });
};
exports.updateBeer = updateBeer;
// Supprimer une bière
const deleteBeer = (req, res) => {
    const beerId = req.params.id;
    client.query('DELETE FROM Beers WHERE id_beer = $1 RETURNING *;', [beerId], (err, result) => {
        if (err) {
            console.error('Erreur lors de la suppression de la bière:', err);
            res.status(500).send('Erreur serveur');
        }
        else if (result.rows.length === 0) {
            res.status(404).send('Bière non trouvée');
        }
        else {
            res.status(204).send();
        }
    });
};
exports.deleteBeer = deleteBeer;
