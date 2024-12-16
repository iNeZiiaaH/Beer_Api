import client from "../config/database";
import { Category } from "../models/Category";

class CategoryRepository {
    async getAll(): Promise<Category[]> {
        const result = await client.query("SELECT * FROM Categories;");
        return result.rows;
    }

    async getById(id: number): Promise<Category | null> {
        const result = await client.query("SELECT * FROM Categories WHERE id_category = $1;", [id]);
        return result.rows.length ? result.rows[0] : null;
    }

    async create(category: Partial<Category>): Promise<Category> {
        const result = await client.query(
            "INSERT INTO Categories (name) VALUES ($1) RETURNING *;",
            [category.name]
        );
        return result.rows[0];
    }

    async update(id: number, category: Partial<Category>): Promise<Category | null> {
        const result = await client.query(
            `UPDATE Categories SET name = $1, updated_at = CURRENT_TIMESTAMP
             WHERE id_category = $2 RETURNING *;`,
            [category.name, id]
        );
        return result.rows.length ? result.rows[0] : null;
    }

    async delete(id: number): Promise<Category | null> {
        const result = await client.query(
            "DELETE FROM Categories WHERE id_category = $1 RETURNING *;",
            [id]
        );
        return result.rows.length ? result.rows[0] : null;
    }
}

export default new CategoryRepository();