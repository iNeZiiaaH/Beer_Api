import { Request, Response } from 'express';
import client from '../config/database'; 

export const createBrewery = async (req: Request, res: Response): Promise<void> => {
    const { name, country } = req.body;

    if (!name || !country) {
        res.status(400).json({ error: 'Le nom et le pays sont obligatoires.' });
        return;
    }

    try {
        const result = await client.query(
            'INSERT INTO Breweries (name, country) VALUES ($1, $2) RETURNING *;',
            [name, country]
        );
        res.status(201).json({
            message: 'Brasserie créée avec succès.',
            brewery: result.rows[0],
        });
    } catch (error) {
        console.error('Erreur lors de la création de la brasserie:', error);
        res.status(500).json({ error: 'Échec de la création de la brasserie.' });
    }
};

export const getBreweries = async (req: Request, res: Response): Promise<void> => {
    try {
        const result = await client.query('SELECT * FROM Breweries;');
        res.status(200).json({
            message: 'Brasseries récupérées avec succès.',
            breweries: result.rows,
        });
    } catch (error) {
        console.error('Erreur lors de la récupération des brasseries:', error);
        res.status(500).json({ error: 'Échec de la récupération des brasseries.' });
    }
};

export const getBreweryById = async (req: Request, res: Response): Promise<void> => {
    const breweryId = parseInt(req.params.id, 10);

    if (isNaN(breweryId)) {
        res.status(400).json({ error: "L'ID de la brasserie est invalide." });
        return;
    }

    try {
        const result = await client.query('SELECT * FROM Breweries WHERE id_brewery = $1;', [breweryId]);
        if (result.rows.length === 0) {
            res.status(404).json({ error: 'Brasserie non trouvée.' });
        } else {
            res.status(200).json({
                message: 'Brasserie récupérée avec succès.',
                brewery: result.rows[0],
            });
        }
    } catch (error) {
        console.error('Erreur lors de la récupération de la brasserie:', error);
        res.status(500).json({ error: 'Échec de la récupération de la brasserie.' });
    }
};

export const updateBrewery = async (req: Request, res: Response): Promise<void> => {
    const breweryId = parseInt(req.params.id, 10);
    const { name, country } = req.body;

    if (isNaN(breweryId)) {
        res.status(400).json({ error: "L'ID de la brasserie est invalide. Veuillez fournir un nombre valide." });
        return;
    }

    if (!name || !country) {
        res.status(400).json({ error: 'Le nom et le pays sont obligatoires.' });
        return;
    }

    try {
        const result = await client.query(
            `
            UPDATE Breweries
            SET name = $1, country = $2, updated_at = CURRENT_TIMESTAMP
            WHERE id_brewery = $3
            RETURNING *;
            `,
            [name, country, breweryId]
        );

        if (result.rows.length === 0) {
            res.status(404).json({ error: 'Brasserie non trouvée.' });
        } else {
            res.status(200).json({
                message: 'Brasserie mise à jour avec succès.',
                brewery: result.rows[0],
            });
        }
    } catch (error) {
        console.error('Erreur lors de la mise à jour de la brasserie:', error);
        res.status(500).json({ error: 'Échec de la mise à jour de la brasserie.' });
    }
};

export const deleteBrewery = async (req: Request, res: Response): Promise<void> => {
    const breweryId = parseInt(req.params.id, 10);

    if (isNaN(breweryId)) {
        res.status(400).json({ error: "L'ID de la brasserie est invalide. Veuillez fournir un nombre valide." });
        return;
    }

    try {
        const result = await client.query(
            'DELETE FROM Breweries WHERE id_brewery = $1 RETURNING *;',
            [breweryId]
        );

        if (result.rows.length === 0) {
            res.status(404).json({ error: 'Brasserie non trouvée.' });
        } else {
            res.status(200).json({
                message: 'Brasserie supprimée avec succès.',
                deletedBrewery: result.rows[0],
            });
        }
    } catch (error) {
        console.error('Erreur lors de la suppression de la brasserie:', error);
        res.status(500).json({ error: 'Échec de la suppression de la brasserie.' });
    }
};