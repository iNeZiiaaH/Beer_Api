import { Request, Response } from "express";
import client from "../config/database";

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const result = await client.query("SELECT * FROM Users;");
        res.status(200).json(result.rows);
    } catch (error) {
        console.error("Erreur lors de la récupération des utilisateurs:", error);
        res.status(500).send("Erreur serveur");
    }
};

export const getUserById = async (req: Request, res: Response): Promise<void> => {
    const userId = parseInt(req.params.id, 10);

    if (isNaN(userId)) {
        res.status(400).send("ID invalide");
        return;
    }

    try {
        const result = await client.query("SELECT * FROM Users WHERE id_user = $1;", [userId]);
        if (result.rows.length === 0) {
            res.status(404).send("Utilisateur non trouvé");
        } else {
            res.status(200).json(result.rows[0]);
        }
    } catch (error) {
        console.error("Erreur lors de la récupération de l'utilisateur:", error);
        res.status(500).send("Erreur serveur");
    }
};


export const createUser = async (req: Request, res: Response): Promise<void> => {
    const { first_name, email, password } = req.body;

    if (!first_name || !email || !password) {
        res.status(400).send("Tous les champs sont requis");
        return;
    }

    try {
        const result = await client.query(
            "INSERT INTO Users (first_name, email, password) VALUES ($1, $2, $3) RETURNING *;",
            [first_name, email, password]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error("Erreur lors de la création de l'utilisateur:", error);
        res.status(500).send("Erreur serveur");
    }
};

export const updateUser = async (req: Request, res: Response): Promise<void> => {
    const userId = parseInt(req.params.id, 10);
    const { first_name, email, password } = req.body;

    if (isNaN(userId)) {
        res.status(400).send("ID invalide");
        return;
    }

    if (!first_name || !email || !password) {
        res.status(400).send("Tous les champs sont requis");
        return;
    }

    try {
        const result = await client.query(
            "UPDATE Users SET first_name = $1, email = $2, password = $3, updated_at = CURRENT_TIMESTAMP WHERE id_user = $4 RETURNING *;",
            [first_name, email, password, userId]
        );
        if (result.rows.length === 0) {
            res.status(404).send("Utilisateur non trouvé");
        } else {
            res.status(200).json(result.rows[0]);
        }
    } catch (error) {
        console.error("Erreur lors de la mise à jour de l'utilisateur:", error);
        res.status(500).send("Erreur serveur");
    }
};

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
    const userId = parseInt(req.params.id, 10);

    if (isNaN(userId)) {
        res.status(400).send("ID invalide");
        return;
    }

    try {
        const result = await client.query("DELETE FROM Users WHERE id_user = $1 RETURNING *;", [userId]);
        if (result.rows.length === 0) {
            res.status(404).send("Utilisateur non trouvé");
        } else {
            res.status(200).json({
                message: "Utilisateur supprimé avec succès",
                deletedUser: result.rows[0],
            });
        }
    } catch (error) {
        console.error("Erreur lors de la suppression de l'utilisateur:", error);
        res.status(500).send("Erreur serveur");
    }
};
