import express from 'express';
import { createBeer, getAllBeers, getBeerById, updateBeer, deleteBeer, getBeersByBreweryId } from '../controllers/BeerController';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Beers
 *   description: Gestion des bieres
 */


/**
 * @swagger
 * /beers:
 *   post:
 *     tags:
 *       - Beers
 *     summary: Créer une nouvelle bière
 *     description: Ajouter une nouvelle bière à la base de données
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               abv:
 *                 type: number
 *               brewery_id:
 *                 type: integer
 *               category_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Bière créée avec succès
 *       400:
 *         description: Les champs requis sont manquants
 */
router.post('/beers', createBeer);

/**
 * @swagger
 * /beers:
 *   get:
 *     tags:
 *       - Beers
 *     summary: Obtenir toutes les bières
 *     description: Récupérer toutes les bières de la base de données
 *     responses:
 *       200:
 *         description: Liste des bières
 */
router.get('/beers', getAllBeers);

/**
 * @swagger
 * /beers/{id}:
 *   get:
 *     tags:
 *       - Beers
 *     summary: Obtenir une bière par ID
 *     description: Récupérer une bière spécifique par son ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la bière à récupérer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Détails de la bière
 *       404:
 *         description: Bière non trouvée
 */
router.get('/beers/:id', getBeerById);

/**
 * @swagger
 * /beers/{id}:
 *   put:
 *     tags:
 *       - Beers
 *     summary: Mettre à jour une bière
 *     description: Modifier les informations d'une bière
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la bière à mettre à jour
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               abv:
 *                 type: number
 *               brewery_id:
 *                 type: integer
 *               category_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Bière mise à jour
 *       400:
 *         description: Les champs requis sont manquants
 *       404:
 *         description: Bière non trouvée
 */
router.put('/beers/:id', updateBeer);

/**
 * @swagger
 * /beers/{id}:
 *   delete:
 *     tags:
 *       - Beers
 *     summary: Supprimer une bière
 *     description: Supprimer une bière de la base de données
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la bière à supprimer
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Bière supprimée avec succès
 *       404:
 *         description: Bière non trouvée
 */
router.delete('/beers/:id', deleteBeer);

/**
 * @swagger
 * /breweries/{breweryId}/beers:
 *   get:
 *     tags:
 *       - Beers
 *     summary: Obtenir les bières associées à une brasserie
 *     description: Récupérer toutes les bières associées à une brasserie spécifique
 *     parameters:
 *       - in: path
 *         name: breweryId
 *         required: true
 *         description: ID de la brasserie
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Liste des bières associées
 *       404:
 *         description: Brasserie ou bières non trouvées
 */
router.get('/breweries/:breweryId/beers', getBeersByBreweryId);

export default router;
