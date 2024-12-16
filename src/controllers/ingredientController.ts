import { Request, Response } from "express";
import IngredientService from "../services/IngredientService";

export const getAllIngredients = async (req: Request, res: Response): Promise<void> => {
    try {
        const ingredients = await IngredientService.getAllIngredients();
        res.status(200).json(ingredients);
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
};

export const getIngredientById = async (req: Request, res: Response): Promise<void> => {
    // Convertie en nombre entier
    const ingredientId = parseInt(req.params.id, 10);

    try {
        const ingredient = await IngredientService.getIngredientById(ingredientId);
        res.status(200).json(ingredient);
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
};

export const createIngredient = async (req: Request, res: Response): Promise<void> => {
    try {
        const newIngredient = await IngredientService.createIngredient(req.body);
        res.status(201).json(newIngredient);
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
};

export const updateIngredient = async (req: Request, res: Response): Promise<void> => {
    const ingredientId = parseInt(req.params.id, 10);

    try {
        const updatedIngredient = await IngredientService.updateIngredient(ingredientId, req.body);
        res.status(200).json(updatedIngredient);
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
};

export const deleteIngredient = async (req: Request, res: Response): Promise<void> => {
    const ingredientId = parseInt(req.params.id, 10);

    try {
        const deletedIngredient = await IngredientService.deleteIngredient(ingredientId);
        res.status(200).json({ message: "Ingrédient supprimé avec succès.", deletedIngredient });
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
};
