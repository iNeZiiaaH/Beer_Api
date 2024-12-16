import client from "../config/database";
import { Brewery } from "../models/Brewery";

class BreweryRepository {
    async getAll(): Promise<Brewery[]> {
        const result = await client.query("SELECT * FROM Breweries;");
        return result.rows;
    }

    async getById(id: number): Promise<Brewery | null> {
        const result = await client.query("SELECT * FROM Breweries WHERE id_brewery = $1;", [id]);
        return result.rows.length ? result.rows[0] : null;
    }

    async create(brewery: Partial<Brewery>): Promise<Brewery> {
        const result = await client.query(
            "INSERT INTO Breweries (name, country) VALUES ($1, $2) RETURNING *;",
            [brewery.name, brewery.country]
        );
        return result.rows[0];
    }

    async update(id: number, brewery: Partial<Brewery>): Promise<Brewery | null> {
        const result = await client.query(
            `UPDATE Breweries SET name = $1, country = $2, updated_at = CURRENT_TIMESTAMP
            WHERE id_brewery = $3 RETURNING *;`,
            [brewery.name, brewery.country, id]
        );
        return result.rows.length ? result.rows[0] : null;
    }

    async delete(id: number): Promise<Brewery | null> {
        const result = await client.query(
            "DELETE FROM Breweries WHERE id_brewery = $1 RETURNING *;",
            [id]
        );
        return result.rows.length ? result.rows[0] : null;
    }
}

export default new BreweryRepository();