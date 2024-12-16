import { Request, Response } from "express";
import UserService from "../services/UserService";

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await UserService.getAllUsers();
        res.status(200).json(users);
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
};

export const getUserById = async (req: Request, res: Response): Promise<void> => {
    const userId = parseInt(req.params.id, 10);

    try {
        const user = await UserService.getUserById(userId);
        res.status(200).json(user);
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
};

export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const newUser = await UserService.createUser(req.body);
        res.status(201).json(newUser);
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
};

export const updateUser = async (req: Request, res: Response): Promise<void> => {
    // Convertie en nombre entier
    const userId = parseInt(req.params.id, 10);

    try {
        const updatedUser = await UserService.updateUser(userId, req.body);
        res.status(200).json(updatedUser);
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
};

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
    const userId = parseInt(req.params.id, 10);

    try {
        const deletedUser = await UserService.deleteUser(userId);
        res.status(200).json({ message: "Utilisateur supprimé avec succès.", deletedUser });
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
};
