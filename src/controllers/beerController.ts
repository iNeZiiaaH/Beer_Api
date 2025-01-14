import { Request, Response } from "express";
import BeerService from "../services/BeerService";

export const getAllBeers = async (req: Request, res: Response): Promise<void> => {
    try {
        const beers = await BeerService.getAllBeers();
        res.status(200).json(beers);
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
};

export const getBeerById = async (req: Request, res: Response): Promise<void> => {
    const beerId = parseInt(req.params.id, 10);

    try {
        const beer = await BeerService.getBeerById(beerId);
        res.status(200).json(beer);
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
};

export const createBeer = async (req: Request, res: Response): Promise<void> => {
    try {
        const newBeer = await BeerService.createBeer(req.body);
        res.status(201).json(newBeer);
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
};

export const updateBeer = async (req: Request, res: Response): Promise<void> => {
    // Convertie en nombre entier
    const beerId = parseInt(req.params.id, 10);

    try {
        const updatedBeer = await BeerService.updateBeer(beerId, req.body);
        res.status(200).json(updatedBeer);
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
};

export const deleteBeer = async (req: Request, res: Response): Promise<void> => {
    const beerId = parseInt(req.params.id, 10);

    try {
        const deletedBeer = await BeerService.deleteBeer(beerId);
        res.status(200).json({ message: "Bière supprimée avec succès.", deletedBeer });
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
};

export const getBeersByBreweryId = async (req: Request, res: Response): Promise<void> => {
    const breweryId = parseInt(req.params.breweryId, 10);

    try {
        const beers = await BeerService.getBeersByBreweryId(breweryId);
        res.status(200).json(beers);
    } catch (err: any) {
        res.status(404).json({ error: err.message });
    }
};

