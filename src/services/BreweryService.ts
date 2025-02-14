import BreweryRepository from "../repository/breweryRepository";
import { Brewery } from "../models/brewery";

class BreweryService {
    async getAllBreweries(): Promise<Brewery[]> {
        return await BreweryRepository.getAll();
    }

    async getBreweryById(id: number): Promise<Brewery> {
        if (isNaN(id)) {
            throw new Error("L'ID de la brasserie est invalide.");
        }

        const brewery = await BreweryRepository.getById(id);
        if (!brewery) {
            throw new Error("Brasserie non trouvée.");
        }

        return brewery;
    }

    async createBrewery(breweryData: Partial<Brewery>): Promise<Brewery> {
        if (!breweryData.name || !breweryData.country) {
            throw new Error("Le nom et le pays sont requis.");
        }

        return await BreweryRepository.create(breweryData);
    }

    async updateBrewery(id: number, breweryData: Partial<Brewery>): Promise<Brewery> {
        if (isNaN(id)) {
            throw new Error("L'ID de la brasserie est invalide.");
        }

        const updatedBrewery = await BreweryRepository.update(id, breweryData);
        if (!updatedBrewery) {
            throw new Error("Brasserie non trouvée.");
        }

        return updatedBrewery;
    }

    async deleteBrewery(id: number): Promise<Brewery> {
        if (isNaN(id)) {
            throw new Error("L'ID de la brasserie est invalide.");
        }

        const deletedBrewery = await BreweryRepository.delete(id);
        if (!deletedBrewery) {
            throw new Error("Brasserie non trouvée.");
        }

        return deletedBrewery;
    }
}

export default new BreweryService();
