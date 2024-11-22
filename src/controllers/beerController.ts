import { Request, Response } from 'express';
import client from '../config/database';

export const createBeer = (req: Request, res: Response): void => {
    const { name, description, abv, brewery_id, category_id } = req.body;

    if (!name || abv === undefined || !brewery_id) {
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

export const getBeerById = (req: Request, res: Response): void => {
    const beerId = req.params.id;
    client.query('SELECT * FROM Beers WHERE id = $1;', [beerId], (err, result) => {
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

export const updateBeer = (req: Request, res: Response): void => {
    const beerId = req.params.id;
    const { name, description, abv, brewery_id, category_id } = req.body;

    const query = `
        UPDATE Beers
        SET name = $1, description = $2, abv = $3, brewery_id = $4, category_id = $5, updated_at = CURRENT_TIMESTAMP
        WHERE id = $6
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

export const deleteBeer = (req: Request, res: Response): void => {
    const beerId = req.params.id;
    client.query('DELETE FROM Beers WHERE id = $1 RETURNING *;', [beerId], (err, result) => {
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
