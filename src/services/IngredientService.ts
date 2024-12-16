import IngredientRepository from "../repository/IngredientRepository";
import { Ingredient } from "../models/Ingredient";

class IngredientService {
    async getAllIngredients(): Promise<Ingredient[]> {
        return await IngredientRepository.getAll();
    }

    async getIngredientById(id: number): Promise<Ingredient> {
        if (isNaN(id)) {
            throw new Error("L'ID de l'ingrédient est invalide.");
        }

        const ingredient = await IngredientRepository.getById(id);
        if (!ingredient) {
            throw new Error("Ingrédient non trouvé.");
        }

        return ingredient;
    }

    async createIngredient(ingredientData: Partial<Ingredient>): Promise<Ingredient> {
        if (!ingredientData.name || !ingredientData.type) {
            throw new Error("Le nom et le type de l'ingrédient sont requis.");
        }

        return await IngredientRepository.create(ingredientData);
    }

    async updateIngredient(id: number, ingredientData: Partial<Ingredient>): Promise<Ingredient> {
        if (isNaN(id)) {
            throw new Error("L'ID de l'ingrédient est invalide.");
        }

        const updatedIngredient = await IngredientRepository.update(id, ingredientData);
        if (!updatedIngredient) {
            throw new Error("Ingrédient non trouvé.");
        }

        return updatedIngredient;
    }

    async deleteIngredient(id: number): Promise<Ingredient> {
        if (isNaN(id)) {
            throw new Error("L'ID de l'ingrédient est invalide.");
        }

        const deletedIngredient = await IngredientRepository.delete(id);
        if (!deletedIngredient) {
            throw new Error("Ingrédient non trouvé.");
        }

        return deletedIngredient;
    }
}

export default new IngredientService();
