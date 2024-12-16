import { Request, Response } from "express";
import IngredientRepository from "../repository/ingredientRepository";

export const getAllIngredients = async (req: Request, res: Response): Promise<void> => {
    try {
        const ingredients = await IngredientRepository.getAll();
        res.status(200).json(ingredients);
    } catch (err) {
        res.status(500).json({ error: "Erreur lors de la récupération des ingrédients." });
    }
};

export const getIngredientById = async (req: Request, res: Response): Promise<void> => {
    const ingredientId = parseInt(req.params.id, 10);

    if (isNaN(ingredientId)) {
        res.status(400).json({ error: "ID invalide." });
        return;
    }

    try {
        const ingredient = await IngredientRepository.getById(ingredientId);
        if (!ingredient) {
            res.status(404).json({ error: "Ingrédient non trouvé." });
        } else {
            res.status(200).json(ingredient);
        }
    } catch (err) {
        res.status(500).json({ error: "Erreur lors de la récupération de l'ingrédient." });
    }
};

export const createIngredient = async (req: Request, res: Response): Promise<void> => {
    const { name, type } = req.body;

    if (!name || !type) {
        res.status(400).json({ error: "Le nom et le type sont requis." });
        return;
    }

    try {
        const newIngredient = await IngredientRepository.create({ name, type });
        res.status(201).json(newIngredient);
    } catch (err) {
        res.status(500).json({ error: "Erreur lors de la création de l'ingrédient." });
    }
};

export const updateIngredient = async (req: Request, res: Response): Promise<void> => {
    const ingredientId = parseInt(req.params.id, 10);
    const { name, type } = req.body;

    if (isNaN(ingredientId)) {
        res.status(400).json({ error: "ID invalide." });
        return;
    }

    if (!name || !type) {
        res.status(400).json({ error: "Le nom et le type sont requis." });
        return;
    }

    try {
        const updatedIngredient = await IngredientRepository.update(ingredientId, { name, type });
        if (!updatedIngredient) {
            res.status(404).json({ error: "Ingrédient non trouvé." });
        } else {
            res.status(200).json(updatedIngredient);
        }
    } catch (err) {
        res.status(500).json({ error: "Erreur lors de la mise à jour de l'ingrédient." });
    }
};

export const deleteIngredient = async (req: Request, res: Response): Promise<void> => {
    const ingredientId = parseInt(req.params.id, 10);

    if (isNaN(ingredientId)) {
        res.status(400).json({ error: "ID invalide." });
        return;
    }

    try {
        const deletedIngredient = await IngredientRepository.delete(ingredientId);
        if (!deletedIngredient) {
            res.status(404).json({ error: "Ingrédient non trouvé." });
        } else {
            res.status(200).json({
                message: "Ingrédient supprimé avec succès.",
                deletedIngredient,
            });
        }
    } catch (err) {
        res.status(500).json({ error: "Erreur lors de la suppression de l'ingrédient." });
    }
};