import { Request, Response } from "express";
import CategoryRepository from "../repository/categoryRepository";

export const getAllCategories = async (req: Request, res: Response): Promise<void> => {
    try {
        const categories = await CategoryRepository.getAll();
        res.status(200).json(categories);
    } catch (err) {
        res.status(500).json({ error: "Erreur lors de la récupération des catégories." });
    }
};

export const getCategoryById = async (req: Request, res: Response): Promise<void> => {
    const categoryId = parseInt(req.params.id, 10);

    if (isNaN(categoryId)) {
        res.status(400).json({ error: "ID invalide." });
        return;
    }

    try {
        const category = await CategoryRepository.getById(categoryId);
        if (!category) {
            res.status(404).json({ error: "Catégorie non trouvée." });
        } else {
            res.status(200).json(category);
        }
    } catch (err) {
        res.status(500).json({ error: "Erreur lors de la récupération de la catégorie." });
    }
};

export const createCategory = async (req: Request, res: Response): Promise<void> => {
    const { name } = req.body;

    if (!name) {
        res.status(400).json({ error: "Le nom est requis." });
        return;
    }

    try {
        const newCategory = await CategoryRepository.create({ name });
        res.status(201).json(newCategory);
    } catch (err) {
        res.status(500).json({ error: "Erreur lors de la création de la catégorie." });
    }
};

export const updateCategory = async (req: Request, res: Response): Promise<void> => {
    const categoryId = parseInt(req.params.id, 10);
    const { name } = req.body;

    if (isNaN(categoryId)) {
        res.status(400).json({ error: "ID invalide." });
        return;
    }

    if (!name) {
        res.status(400).json({ error: "Le nom est requis." });
        return;
    }

    try {
        const updatedCategory = await CategoryRepository.update(categoryId, { name });
        if (!updatedCategory) {
            res.status(404).json({ error: "Catégorie non trouvée." });
        } else {
            res.status(200).json(updatedCategory);
        }
    } catch (err) {
        res.status(500).json({ error: "Erreur lors de la mise à jour de la catégorie." });
    }
};

export const deleteCategory = async (req: Request, res: Response): Promise<void> => {
    const categoryId = parseInt(req.params.id, 10);

    if (isNaN(categoryId)) {
        res.status(400).json({ error: "ID invalide." });
        return;
    }

    try {
        const deletedCategory = await CategoryRepository.delete(categoryId);
        if (!deletedCategory) {
            res.status(404).json({ error: "Catégorie non trouvée." });
        } else {
            res.status(200).json({
                message: "Catégorie supprimée avec succès.",
                deletedCategory,
            });
        }
    } catch (err) {
        res.status(500).json({ error: "Erreur lors de la suppression de la catégorie." });
    }
};
