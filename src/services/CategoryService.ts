import CategoryRepository from "../repository/categoryRepository";
import { Category } from "../models/category";

class CategoryService {
    async getAllCategories(): Promise<Category[]> {
        return await CategoryRepository.getAll();
    }

    async getCategoryById(id: number): Promise<Category> {
        if (isNaN(id)) {
            throw new Error("L'ID de la catégorie est invalide.");
        }

        const category = await CategoryRepository.getById(id);
        if (!category) {
            throw new Error("Catégorie non trouvée.");
        }

        return category;
    }

    async createCategory(categoryData: Partial<Category>): Promise<Category> {
        if (!categoryData.name) {
            throw new Error("Le nom de la catégorie est requis.");
        }

        return await CategoryRepository.create(categoryData);
    }
    
    async updateCategory(id: number, categoryData: Partial<Category>): Promise<Category> {
        if (isNaN(id)) {
            throw new Error("L'ID de la catégorie est invalide.");
        }

        const updatedCategory = await CategoryRepository.update(id, categoryData);
        if (!updatedCategory) {
            throw new Error("Catégorie non trouvée.");
        }

        return updatedCategory;
    }

    async deleteCategory(id: number): Promise<Category> {
        if (isNaN(id)) {
            throw new Error("L'ID de la catégorie est invalide.");
        }

        const deletedCategory = await CategoryRepository.delete(id);
        if (!deletedCategory) {
            throw new Error("Catégorie non trouvée.");
        }

        return deletedCategory;
    }
}

export default new CategoryService();
