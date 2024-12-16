import { Request, Response } from "express";
import BreweryRepository from "../repository/breweryRepository";

export const getAllBreweries = async (req: Request, res: Response): Promise<void> => {
    try {
        const breweries = await BreweryRepository.getAll();
        res.status(200).json(breweries);
    } catch (err) {
        res.status(500).json({ error: "Erreur lors de la récupération des brasseries." });
    }
};

export const getBreweryById = async (req: Request, res: Response): Promise<void> => {
    const breweryId = parseInt(req.params.id, 10);

    if (isNaN(breweryId)) {
        res.status(400).json({ error: "ID invalide." });
        return;
    }

    try {
        const brewery = await BreweryRepository.getById(breweryId);
        if (!brewery) {
            res.status(404).json({ error: "Brasserie non trouvée." });
        } else {
            res.status(200).json(brewery);
        }
    } catch (err) {
        res.status(500).json({ error: "Erreur lors de la récupération de la brasserie." });
    }
};

export const createBrewery = async (req: Request, res: Response): Promise<void> => {
    const { name, country } = req.body;

    if (!name || !country) {
        res.status(400).json({ error: "Le nom et le pays sont obligatoires." });
        return;
    }

    try {
        const newBrewery = await BreweryRepository.create({ name, country });
        res.status(201).json(newBrewery);
    } catch (err) {
        res.status(500).json({ error: "Erreur lors de la création de la brasserie." });
    }
};

export const updateBrewery = async (req: Request, res: Response): Promise<void> => {
    const breweryId = parseInt(req.params.id, 10);
    const { name, country } = req.body;

    if (isNaN(breweryId)) {
        res.status(400).json({ error: "ID invalide." });
        return;
    }

    if (!name || !country) {
        res.status(400).json({ error: "Le nom et le pays sont obligatoires." });
        return;
    }

    try {
        const updatedBrewery = await BreweryRepository.update(breweryId, { name, country });
        if (!updatedBrewery) {
            res.status(404).json({ error: "Brasserie non trouvée." });
        } else {
            res.status(200).json(updatedBrewery);
        }
    } catch (err) {
        res.status(500).json({ error: "Erreur lors de la mise à jour de la brasserie." });
    }
};

export const deleteBrewery = async (req: Request, res: Response): Promise<void> => {
    const breweryId = parseInt(req.params.id, 10);

    if (isNaN(breweryId)) {
        res.status(400).json({ error: "ID invalide." });
        return;
    }

    try {
        const deletedBrewery = await BreweryRepository.delete(breweryId);
        if (!deletedBrewery) {
            res.status(404).json({ error: "Brasserie non trouvée." });
        } else {
            res.status(200).json({
                message: "Brasserie supprimée avec succès.",
                deletedBrewery,
            });
        }
    } catch (err) {
        res.status(500).json({ error: "Erreur lors de la suppression de la brasserie." });
    }
};
