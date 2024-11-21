import { Request, Response } from 'express';
import { Client } from 'pg';

// Configure la bdd pour ce connecter PostgreSQL
const client = new Client({
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

/**
 * @swagger
 * /beers:
 *   post:
 *     summary: Crée une nouvelle bière
 *     description: Permet de créer une nouvelle bière dans la base de données
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Le nom de la bière
 *               description:
 *                 type: string
 *                 description: Une description de la bière
 *               abv:
 *                 type: number
 *                 description: Le pourcentage d'alcool de la bière
 *               brewery_id:
 *                 type: integer
 *                 description: L'ID de la brasserie
 *               category_id:
 *                 type: integer
 *                 description: L'ID de la catégorie
 *     responses:
 *       201:
 *         description: Bière créée avec succès
 *       400:
 *         description: Données manquantes dans la requête
 *       500:
 *         description: Erreur serveur
 */
export const createBeer = (req: Request, res: Response): void => {
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
        } else {
            res.status(201).json(result.rows[0]);
        }
    });
};

/**
 * @swagger
 * /beers:
 *   get:
 *     summary: Récupère toutes les bières
 *     description: Permet de récupérer toutes les bières disponibles dans la base de données
 *     responses:
 *       200:
 *         description: Liste des bières récupérée avec succès
 *       500:
 *         description: Erreur serveur
 */
export const getAllBeers = (req: Request, res: Response): void => {
    client.query('SELECT * FROM Beers;', (err, result) => {
        if (err) {
            console.error('Erreur lors de la requête SQL:', err);
            res.status(500).send('Erreur serveur');
        } else {
            res.json(result.rows);
        }
    });
};

/**
 * @swagger
 * /beers/{id}:
 *   get:
 *     summary: Récupère les détails d'une bière
 *     description: Permet de récupérer les informations détaillées d'une bière spécifiée par son ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: L'ID de la bière à récupérer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Détails de la bière récupérés avec succès
 *       404:
 *         description: Bière non trouvée
 *       500:
 *         description: Erreur serveur
 */
export const getBeerById = (req: Request, res: Response): void => {
    const beerId = req.params.id;
    client.query('SELECT * FROM Beers WHERE id_beer = $1;', [beerId], (err, result) => {
        if (err) {
            console.error('Erreur lors de la requête SQL:', err);
            res.status(500).send('Erreur serveur');
        } else if (result.rows.length === 0) {
            res.status(404).send('Bière non trouvée');
        } else {
            res.json(result.rows[0]);
        }
    });
};

/**
 * @swagger
 * /beers/{id}:
 *   put:
 *     summary: Met à jour une bière
 *     description: Permet de mettre à jour les informations d'une bière existante
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: L'ID de la bière à mettre à jour
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               abv:
 *                 type: number
 *               brewery_id:
 *                 type: integer
 *               category_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Bière mise à jour avec succès
 *       404:
 *         description: Bière non trouvée
 *       500:
 *         description: Erreur serveur
 */
export const updateBeer = (req: Request, res: Response): void => {
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
        } else if (result.rows.length === 0) {
            res.status(404).send('Bière non trouvée');
        } else {
            res.json(result.rows[0]);
        }
    });
};

/**
 * @swagger
 * /beers/{id}:
 *   delete:
 *     summary: Supprime une bière
 *     description: Permet de supprimer une bière spécifiée par son ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: L'ID de la bière à supprimer
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Bière supprimée avec succès
 *       404:
 *         description: Bière non trouvée
 *       500:
 *         description: Erreur serveur
 */
export const deleteBeer = (req: Request, res: Response): void => {
    const beerId = req.params.id;
    client.query('DELETE FROM Beers WHERE id_beer = $1 RETURNING *;', [beerId], (err, result) => {
        if (err) {
            console.error('Erreur lors de la suppression de la bière:', err);
            res.status(500).send('Erreur serveur');
        } else if (result.rows.length === 0) {
            res.status(404).send('Bière non trouvée');
        } else {
            res.status(204).send();
        }
    });
};
