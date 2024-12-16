import client from "../config/database";
import { Ingredient } from "../models/ingredient";

class IngredientRepository {
    async getAll(): Promise<Ingredient[]> {
        const result = await client.query("SELECT * FROM Ingredients;");
        return result.rows;
    }

    async getById(id: number): Promise<Ingredient | null> {
        const result = await client.query("SELECT * FROM Ingredients WHERE id_ingredient = $1;", [id]);
        return result.rows.length ? result.rows[0] : null;
    }

    async create(ingredient: Partial<Ingredient>): Promise<Ingredient> {
        const result = await client.query(
            "INSERT INTO Ingredients (name, type) VALUES ($1, $2) RETURNING *;",
            [ingredient.name, ingredient.type]
        );
        return result.rows[0];
    }

    async update(id: number, ingredient: Partial<Ingredient>): Promise<Ingredient | null> {
        const result = await client.query(
            `UPDATE Ingredients SET name = $1, type = $2, updated_at = CURRENT_TIMESTAMP
             WHERE id_ingredient = $3 RETURNING *;`,
            [ingredient.name, ingredient.type, id]
        );
        return result.rows.length ? result.rows[0] : null;
    }

    async delete(id: number): Promise<Ingredient | null> {
        const result = await client.query(
            "DELETE FROM Ingredients WHERE id_ingredient = $1 RETURNING *;",
            [id]
        );
        return result.rows.length ? result.rows[0] : null;
    }
}

export default new IngredientRepository();
