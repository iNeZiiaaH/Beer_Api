import { Request, Response } from "express";
import BeerRepository from "../repository/beerRepository";

export const getAllBeers = async (req: Request, res: Response): Promise<void> => {
    try {
        const beers = await BeerRepository.getAll();
        res.status(200).json(beers);
    } catch (err) {
        res.status(500).json({ error: "Erreur lors de la récupération des bières." });
    }
};

export const getBeerById = async (req: Request, res: Response): Promise<void> => {
    const beerId = parseInt(req.params.id, 10);

    if (isNaN(beerId)) {
        res.status(400).json({ error: "ID invalide." });
        return;
    }

    try {
        const beer = await BeerRepository.getById(beerId);
        if (!beer) {
            res.status(404).json({ error: "Bière non trouvée." });
        } else {
            res.status(200).json(beer);
        }
    } catch (err) {
        res.status(500).json({ error: "Erreur lors de la récupération de la bière." });
    }
};

export const createBeer = async (req: Request, res: Response): Promise<void> => {
    const { name, description, abv, brewery_id, category_id } = req.body;

    if (!name || abv === undefined || !brewery_id || !category_id) {
        res.status(400).json({ error: "Tous les champs obligatoires doivent être remplis." });
        return;
    }

    try {
        const newBeer = await BeerRepository.create({ name, description, abv, brewery_id, category_id });
        res.status(201).json(newBeer);
    } catch (err) {
        res.status(500).json({ error: "Erreur lors de la création de la bière." });
    }
};

export const updateBeer = async (req: Request, res: Response): Promise<void> => {
    const beerId = parseInt(req.params.id, 10);
    const { name, description, abv, brewery_id, category_id } = req.body;

    if (isNaN(beerId)) {
        res.status(400).json({ error: "ID invalide." });
        return;
    }

    if (!name || abv === undefined || !brewery_id || !category_id) {
        res.status(400).json({ error: "Tous les champs obligatoires doivent être remplis." });
        return;
    }

    try {
        const updatedBeer = await BeerRepository.update(beerId, { name, description, abv, brewery_id, category_id });
        if (!updatedBeer) {
            res.status(404).json({ error: "Bière non trouvée." });
        } else {
            res.status(200).json(updatedBeer);
        }
    } catch (err) {
        res.status(500).json({ error: "Erreur lors de la mise à jour de la bière." });
    }
};

export const deleteBeer = async (req: Request, res: Response): Promise<void> => {
    const beerId = parseInt(req.params.id, 10);

    if (isNaN(beerId)) {
        res.status(400).json({ error: "ID invalide." });
        return;
    }

    try {
        const deletedBeer = await BeerRepository.delete(beerId);
        if (!deletedBeer) {
            res.status(404).json({ error: "Bière non trouvée." });
        } else {
            res.status(200).json({
                message: "Bière supprimée avec succès.",
                deletedBeer,
            });
        }
    } catch (err) {
        res.status(500).json({ error: "Erreur lors de la suppression de la bière." });
    }
};