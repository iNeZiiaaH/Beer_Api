import { BeerIngredient } from "../models/beerIngredient";
import beerIngredientRepository from "../repository/beerIngredientRepository";

class BeerIngredientService {
    async getAllBeerIngredients(): Promise<BeerIngredient[]> {
        return await beerIngredientRepository.getAll();
    }

    async getBeerIngredientById(id: number): Promise<BeerIngredient> {
        if (isNaN(id)) throw new Error("L'ID est invalide.");
        
        const BeerIngredient = await beerIngredientRepository.getById(id);
        if (!BeerIngredient) throw new Error("Association bière-ingrédient non trouvée.");
        
        return BeerIngredient;
    }
}

export default new BeerIngredientService();
