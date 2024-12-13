import express from 'express';
import { getAllIngredients, createIngredient } from '../controllers/ingredientController';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Ingredients
 *   description: Gestion des ingrédients
 */

/**
 * @swagger
 * /ingredients:
 *   get:
 *     summary: Récupérer tous les ingrédients
 *     tags: [Ingredients]
 *     responses:
 *       200:
 *         description: Liste de tous les ingrédients
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_ingredient:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   type:
 *                     type: string
 *                   created_at:
 *                     type: string
 *                     format: date-time
 *                   updated_at:
 *                     type: string
 *                     format: date-time
 *       500:
 *         description: Erreur lors de la récupération des ingrédients
 */
router.get('/ingredients', getAllIngredients);

/**
 * @swagger
 * /ingredients:
 *   post:
 *     summary: Créer un nouvel ingrédient
 *     tags: [Ingredients]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               type:
 *                 type: string
 *             required:
 *               - name
 *               - type
 *     responses:
 *       201:
 *         description: Ingrédient créé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_ingredient:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 type:
 *                   type: string
 *                 created_at:
 *                   type: string
 *                   format: date-time
 *                 updated_at:
 *                   type: string
 *                   format: date-time
 *       500:
 *         description: Erreur lors de la création de l'ingrédient
 */
router.post('/ingredients', createIngredient);

export default router;
