import { Request, Response } from "express";
import BeerIngredientService from "../services/BeerIngredientService";

export const getAllBeerIngredients = async (req: Request, res: Response): Promise<void> => {
    try {
        const beerIngredients = await BeerIngredientService.getAllBeerIngredients();
        res.status(200).json(beerIngredients);
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
};

export const getBeerIngredientById = async (req: Request, res: Response): Promise<void> => {
    const id = parseInt(req.params.id, 10);

    try {
        const beerIngredient = await BeerIngredientService.getBeerIngredientById(id);
        res.status(200).json(beerIngredient);
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
};
