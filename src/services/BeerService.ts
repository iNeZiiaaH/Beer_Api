import { Beer } from "../models/Beer";
import BeerRepository from "../repository/beerRepository";

class BeerService {
    async getAllBeers(): Promise<Beer[]> {
        return await BeerRepository.getAll();
    }

    async getBeerById(id: number): Promise<Beer> {
        if (isNaN(id)) {
            throw new Error("L'ID de la bière est invalide.");
        }

        const beer = await BeerRepository.getById(id);
        if (!beer) {
            throw new Error("Bière non trouvée.");
        }

        return beer;
    }

    async createBeer(beerData: Partial<Beer>): Promise<Beer> {
        if (
            !beerData.name ||
            !beerData.hasOwnProperty('abv') ||
            !beerData.hasOwnProperty('brewery_id') ||
            !beerData.hasOwnProperty('category_id')
        ) {
            throw new Error("Tous les champs requis doivent être fournis.");
        }
    
        return await BeerRepository.create(beerData);
    }
    

    async updateBeer(id: number, beerData: Partial<Beer>): Promise<Beer> {
        if (isNaN(id)) {
            throw new Error("L'ID de la bière est invalide.");
        }

        const updatedBeer = await BeerRepository.update(id, beerData);
        if (!updatedBeer) {
            throw new Error("Bière non trouvée.");
        }

        return updatedBeer;
    }

    async deleteBeer(id: number): Promise<Beer> {
        if (isNaN(id)) {
            throw new Error("L'ID de la bière est invalide.");
        }

        const deletedBeer = await BeerRepository.delete(id);
        if (!deletedBeer) {
            throw new Error("Bière non trouvée.");
        }

        return deletedBeer;
    }

    async getBeersByBreweryId(breweryId: number): Promise<Beer[]> {
        if (isNaN(breweryId)) {
            throw new Error("L'ID de la brasserie est invalide.");
        }
    
        const beers = await BeerRepository.findByBreweryId(breweryId);
        if (!beers.length) {
            throw new Error("Aucune bière trouvée pour cette brasserie.");
        }
    
        return beers;
    }
    
}

export default new BeerService();