import { Request, Response } from "express";
import CategoryService from "../services/CategoryService";
export const getAllCategories = async (req: Request, res: Response): Promise<void> => {
    try {
        const categories = await CategoryService.getAllCategories();
        res.status(200).json(categories);
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
};

export const getCategoryById = async (req: Request, res: Response): Promise<void> => {
    // Convertie en nombre entier
    const categoryId = parseInt(req.params.id, 10);

    try {
        const category = await CategoryService.getCategoryById(categoryId);
        res.status(200).json(category);
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
};

export const createCategory = async (req: Request, res: Response): Promise<void> => {
    try {
        const newCategory = await CategoryService.createCategory(req.body);
        res.status(201).json(newCategory);
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
};

export const updateCategory = async (req: Request, res: Response): Promise<void> => {
    const categoryId = parseInt(req.params.id, 10);

    try {
        const updatedCategory = await CategoryService.updateCategory(categoryId, req.body);
        res.status(200).json(updatedCategory);
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
};

export const deleteCategory = async (req: Request, res: Response): Promise<void> => {
    const categoryId = parseInt(req.params.id, 10);

    try {
        const deletedCategory = await CategoryService.deleteCategory(categoryId);
        res.status(200).json({ message: "Catégorie supprimée avec succès.", deletedCategory });
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
};
