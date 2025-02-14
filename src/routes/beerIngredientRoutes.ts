import express from 'express';
import {
    getAllBeerIngredients,
    getBeerIngredientById,
} from '../controllers/beerIngredientController';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Beer Ingredients
 *   description: Gestion des relations bière-ingrédient
 */

/**
 * @swagger
 * /beer-ingredients:
 *   get:
 *     tags:
 *       - Beer Ingredients
 *     summary: Obtenir toutes les relations bière-ingrédient
 *     description: Récupérer toutes les relations entre bières et ingrédients
 *     responses:
 *       200:
 *         description: Liste des relations bière-ingrédient
 */
router.get('/beer-ingredients', getAllBeerIngredients);

/**
 * @swagger
 * /beer-ingredients/{id}:
 *   get:
 *     tags:
 *       - Beer Ingredients
 *     summary: Obtenir une relation bière-ingrédient par ID
 *     description: Récupérer une relation spécifique entre une bière et un ingrédient par son ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la relation bière-ingrédient à récupérer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Détails de la relation bière-ingrédient
 *       404:
 *         description: Relation bière-ingrédient non trouvée
 */
router.get('/beer-ingredients/:id', getBeerIngredientById);

export default router;
