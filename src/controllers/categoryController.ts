import { Request, Response } from "express";
import client from "../config/database";

export const getAllCategories = async (req: Request, res: Response): Promise<void> => {
    try {
        const result = await client.query("SELECT * FROM Categories;");
        res.status(200).json(result.rows);
    } catch (error) {
        console.error("Erreur lors de la récupération des catégories:", error);
        res.status(500).send("Erreur serveur");
    }
};

export const getCategoryById = async (req: Request, res: Response): Promise<void> => {
    const categoryId = parseInt(req.params.id, 10);

    if (isNaN(categoryId)) {
        res.status(400).send("ID invalide");
        return;
    }

    try {
        const result = await client.query("SELECT * FROM Categories WHERE id_category = $1;", [categoryId]);
        if (result.rows.length === 0) {
            res.status(404).send("Catégorie non trouvée");
        } else {
            res.status(200).json(result.rows[0]);
        }
    } catch (error) {
        console.error("Erreur lors de la récupération de la catégorie:", error);
        res.status(500).send("Erreur serveur");
    }
};

export const createCategory = async (req: Request, res: Response): Promise<void> => {
    const { name } = req.body;

    if (!name) {
        res.status(400).send("Le nom est requis");
        return;
    }

    try {
        const result = await client.query(
            "INSERT INTO Categories (name) VALUES ($1) RETURNING *;",
            [name]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error("Erreur lors de la création de la catégorie:", error);
        res.status(500).send("Erreur serveur");
    }
};

export const updateCategory = async (req: Request, res: Response): Promise<void> => {
    const categoryId = parseInt(req.params.id, 10);
    const { name } = req.body;

    if (isNaN(categoryId)) {
        res.status(400).send("ID invalide");
        return;
    }

    if (!name) {
        res.status(400).send("Le nom est requis");
        return;
    }

    try {
        const result = await client.query(
            "UPDATE Categories SET name = $1, updated_at = CURRENT_TIMESTAMP WHERE id_category = $2 RETURNING *;",
            [name, categoryId]
        );
        if (result.rows.length === 0) {
            res.status(404).send("Catégorie non trouvée");
        } else {
            res.status(200).json(result.rows[0]);
        }
    } catch (error) {
        console.error("Erreur lors de la mise à jour de la catégorie:", error);
        res.status(500).send("Erreur serveur");
    }
};

export const deleteCategory = async (req: Request, res: Response): Promise<void> => {
    const categoryId = parseInt(req.params.id, 10);

    if (isNaN(categoryId)) {
        res.status(400).send("ID invalide");
        return;
    }

    try {
        const result = await client.query("DELETE FROM Categories WHERE id_category = $1 RETURNING *;", [categoryId]);
        if (result.rows.length === 0) {
            res.status(404).send("Catégorie non trouvée");
        } else {
            res.status(200).json({
                message: "Catégorie supprimée avec succès",
                deletedCategory: result.rows[0],
            });
        }
    } catch (error) {
        console.error("Erreur lors de la suppression de la catégorie:", error);
        res.status(500).send("Erreur serveur");
    }
};
