import { Request, Response } from "express";
import UserRepository from "../repository/userRepository";

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await UserRepository.getAll();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: "Erreur lors de la récupération des utilisateurs." });
    }
};

export const getUserById = async (req: Request, res: Response): Promise<void> => {
    const userId = parseInt(req.params.id, 10);

    if (isNaN(userId)) {
        res.status(400).json({ error: "ID invalide." });
        return;
    }

    try {
        const user = await UserRepository.getById(userId);
        if (!user) {
            res.status(404).json({ error: "Utilisateur non trouvé." });
        } else {
            res.status(200).json(user);
        }
    } catch (err) {
        res.status(500).json({ error: "Erreur lors de la récupération de l'utilisateur." });
    }
};

export const createUser = async (req: Request, res: Response): Promise<void> => {
    const { first_name, email, password } = req.body;

    if (!first_name || !email || !password) {
        res.status(400).json({ error: "Tous les champs sont requis." });
        return;
    }

    try {
        const newUser = await UserRepository.create({ first_name, email, password });
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json({ error: "Erreur lors de la création de l'utilisateur." });
    }
};

export const updateUser = async (req: Request, res: Response): Promise<void> => {
    const userId = parseInt(req.params.id, 10);
    const { first_name, email, password } = req.body;

    if (isNaN(userId)) {
        res.status(400).json({ error: "ID invalide." });
        return;
    }

    if (!first_name || !email || !password) {
        res.status(400).json({ error: "Tous les champs sont requis." });
        return;
    }

    try {
        const updatedUser = await UserRepository.update(userId, { first_name, email, password });
        if (!updatedUser) {
            res.status(404).json({ error: "Utilisateur non trouvé." });
        } else {
            res.status(200).json(updatedUser);
        }
    } catch (err) {
        res.status(500).json({ error: "Erreur lors de la mise à jour de l'utilisateur." });
    }
};

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
    const userId = parseInt(req.params.id, 10);

    if (isNaN(userId)) {
        res.status(400).json({ error: "ID invalide." });
        return;
    }

    try {
        const deletedUser = await UserRepository.delete(userId);
        if (!deletedUser) {
            res.status(404).json({ error: "Utilisateur non trouvé." });
        } else {
            res.status(200).json({
                message: "Utilisateur supprimé avec succès.",
                deletedUser,
            });
        }
    } catch (err) {
        res.status(500).json({ error: "Erreur lors de la suppression de l'utilisateur." });
    }
};