import client from "../config/database";
import { BeerIngredient } from "../models/beerIngredient";

class BeerIngredientRepository {
    async getAll(): Promise<BeerIngredient[]> {
        const result = await client.query("SELECT * FROM Beer_Ingredients;");
        return result.rows;
    }

    async getById(id: number): Promise<BeerIngredient | null> {
        const result = await client.query(
            "SELECT * FROM Beer_Ingredients WHERE id_beer_ingredient = $1;",
            [id]
        );
        return result.rows.length ? result.rows[0] : null;
    }
}

export default new BeerIngredientRepository();
