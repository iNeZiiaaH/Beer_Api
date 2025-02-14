import client from "../config/database";
import { Beer } from "../models/beer";

class BeerRepository {
    async getAll(): Promise<Beer[]> {
        const result = await client.query("SELECT * FROM Beers;");
        return result.rows;
    }
    
    async getById(id: number): Promise<Beer | null> {
        const result = await client.query("SELECT * FROM Beers WHERE id_beer = $1;", [id]);
        return result.rows.length ? result.rows[0] : null;
    }
    
    async create(beer: Partial<Beer>): Promise<Beer> {
        const result = await client.query(
            `INSERT INTO Beers (name, description, abv, brewery_id, category_id) 
                VALUES ($1, $2, $3, $4, $5) RETURNING *;`,
            [beer.name, beer.description, beer.abv, beer.brewery_id, beer.category_id]
        );
        return result.rows[0];
    }
    
    async update(id: number, beer: Partial<Beer>): Promise<Beer | null> {
        const result = await client.query(
            `UPDATE Beers SET name = $1, description = $2, abv = $3, brewery_id = $4, category_id = $5, updated_at = CURRENT_TIMESTAMP 
                WHERE id_beer = $6 RETURNING *;`,
            [beer.name, beer.description, beer.abv, beer.brewery_id, beer.category_id, id]
        );
        return result.rows.length ? result.rows[0] : null;
    }
    
    async delete(id: number): Promise<Beer | null> {
        const result = await client.query(
            "DELETE FROM Beers WHERE id_beer = $1 RETURNING *;", [id]
        );
        return result.rows.length ? result.rows[0] : null;
    }

    async findByBreweryId(breweryId: number): Promise<Beer[]> {
        const result = await client.query(
            "SELECT * FROM Beers WHERE brewery_id = $1;", [breweryId]
        );
        return result.rows;
    }
}

export default new BeerRepository();
