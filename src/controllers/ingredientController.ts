import { Request, Response } from "express";
import client from "../config/database";

export const getAllIngredients = (req: Request, res: Response): void => {
    client.query("SELECT * FROM Ingredients;", (err, result) => {
        if (err) {
            console.error("Erreur lors de la requête SQL:", err);
            res.status(500).send("Erreur serveur");
        } else {
            res.json(result.rows);
        }
    });
};

export const createIngredient = (req: Request, res: Response): void => {
    const { name, type } = req.body;

    if (!name || !type) {
        res.status(400).send("Le nom et le type sont requis");
        return;
    }

    client.query(
        "INSERT INTO Ingredients (name, type) VALUES ($1, $2) RETURNING *;",
        [name, type],
        (err, result) => {
            if (err) {
                console.error("Erreur lors de l'insertion dans la base de données:", err);
                res.status(500).send("Erreur serveur");
            } else {
                res.status(201).json(result.rows[0]);
            }
        }
    );
};
