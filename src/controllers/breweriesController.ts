import { Request, Response } from "express";
import BreweryService from "../services/BreweryService";

export const getAllBreweries = async (req: Request, res: Response): Promise<void> => {
    try {
        const breweries = await BreweryService.getAllBreweries();
        res.status(200).json(breweries);
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
};

export const getBreweryById = async (req: Request, res: Response): Promise<void> => {
    const breweryId = parseInt(req.params.id, 10);

    try {
        const brewery = await BreweryService.getBreweryById(breweryId);
        res.status(200).json(brewery);
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
};

export const createBrewery = async (req: Request, res: Response): Promise<void> => {
    try {
        const newBrewery = await BreweryService.createBrewery(req.body);
        res.status(201).json(newBrewery);
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
};

export const updateBrewery = async (req: Request, res: Response): Promise<void> => {
    // Convertie en nombre entier
    const breweryId = parseInt(req.params.id, 10);

    try {
        const updatedBrewery = await BreweryService.updateBrewery(breweryId, req.body);
        res.status(200).json(updatedBrewery);
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
};

export const deleteBrewery = async (req: Request, res: Response): Promise<void> => {
    const breweryId = parseInt(req.params.id, 10);

    try {
        const deletedBrewery = await BreweryService.deleteBrewery(breweryId);
        res.status(200).json({ message: "Brasserie supprimée avec succès.", deletedBrewery });
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
};
