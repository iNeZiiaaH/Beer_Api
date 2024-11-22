import { Request, Response } from 'express';
import client from '../config/database'; 

export const createBrewery = async (req: Request, res: Response): Promise<void> => {
    const { name, country } = req.body;
    try {
        const result = await client.query(
            'INSERT INTO Breweries (name, country) VALUES ($1, $2) RETURNING *',
            [name, country]
            );
            res.status(201).json(result.rows[0]);
        } catch (error) {
            console.error('Erreur lors de la création de la brasserie:', error);
            res.status(500).json({ error: 'Failed to create brewery' });
        }
    };
    
    export const getBreweries = async (req: Request, res: Response): Promise<void> => {
        try {
            const result = await client.query('SELECT * FROM Breweries');
            res.status(200).json(result.rows); 
        } catch (error) {
            console.error('Erreur lors de la récupération des brasseries:', error);
            res.status(500).json({ error: 'Failed to fetch breweries' });
        }
    };
    
    export const getBreweryById = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        try {
            const result = await client.query('SELECT * FROM Breweries WHERE id_brewery = $1', [id]);
            if (result.rows.length === 0) {
                res.status(404).json({ message: 'Brewery not found' });
            } else {
                res.status(200).json(result.rows[0]); 
            }
        } catch (error) {
            console.error('Erreur lors de la récupération de la brasserie:', error);
            res.status(500).json({ error: 'Failed to fetch brewery' });
        }
    };
    
    export const updateBrewery = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        const { name, country } = req.body;
        try {
            const result = await client.query(
                'UPDATE Breweries SET name = $1, country = $2, updated_at = CURRENT_TIMESTAMP WHERE id_brewery = $3 RETURNING *',
                [name, country, id]
                );
                if (result.rows.length === 0) {
                    res.status(404).json({ message: 'Brewery not found' });
                } else {
                    res.status(200).json(result.rows[0]);
                }
            } catch (error) {
                console.error('Erreur lors de la mise à jour de la brasserie:', error);
                res.status(500).json({ error: 'Failed to update brewery' });
            }
        };
        
        export const deleteBrewery = async (req: Request, res: Response): Promise<void> => {
            const { id } = req.params;
            try {
                const result = await client.query('DELETE FROM Breweries WHERE id_brewery = $1 RETURNING *', [id]);
                if (result.rows.length === 0) {
                    res.status(404).json({ message: 'Brewery not found' });
                } else {
                    res.status(200).json({ message: 'Brewery deleted' });
                }
            } catch (error) {
                console.error('Erreur lors de la suppression de la brasserie:', error);
                res.status(500).json({ error: 'Failed to delete brewery' });
            }
        };
