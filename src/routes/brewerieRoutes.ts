import express from 'express';
import {
  createBrewery,
  getAllBreweries,
  getBreweryById,
  updateBrewery,
  deleteBrewery
} from '../controllers/breweriesController';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Breweries
 *   description: Gestion des brasseries
 */


/**
 * @swagger
 * /breweries:
 *   post:
 *     summary: Créer une nouvelle brasserie
 *     tags: [Breweries]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               country:
 *                 type: string
 *             required:
 *               - name
 *               - country
 *     responses:
 *       201:
 *         description: Brasserie créée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_brewery:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 country:
 *                   type: string
 *       500:
 *         description: Erreur lors de la création de la brasserie
 */
router.post('/breweries', createBrewery);

/**
 * @swagger
 * /breweries:
 *   get:
 *     summary: Récupérer toutes les brasseries
 *     tags: [Breweries]
 *     responses:
 *       200:
 *         description: Liste de toutes les brasseries
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_brewery:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   country:
 *                     type: string
 *       500:
 *         description: Erreur lors de la récupération des brasseries
 */
router.get('/breweries', getAllBreweries);

/**
 * @swagger
 * /breweries/{id}:
 *   get:
 *     summary: Récupérer une brasserie par son ID
 *     tags: [Breweries]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID de la brasserie
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Brasserie récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_brewery:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 country:
 *                   type: string
 *       404:
 *         description: Brasserie non trouvée
 *       500:
 *         description: Erreur lors de la récupération de la brasserie
 */
router.get('/breweries/:id', getBreweryById);

/**
 * @swagger
 * /breweries/{id}:
 *   put:
 *     summary: Mettre à jour une brasserie par son ID
 *     tags: [Breweries]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID de la brasserie
 *         required: true
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
 *               country:
 *                 type: string
 *             required:
 *               - name
 *               - country
 *     responses:
 *       200:
 *         description: Brasserie mise à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_brewery:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 country:
 *                   type: string
 *       404:
 *         description: Brasserie non trouvée
 *       500:
 *         description: Erreur lors de la mise à jour de la brasserie
 */
router.put('/breweries/:id', updateBrewery);

/**
 * @swagger
 * /breweries/{id}:
 *   delete:
 *     summary: Supprimer une brasserie par son ID
 *     tags: [Breweries]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID de la brasserie
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Brasserie supprimée avec succès
 *       404:
 *         description: Brasserie non trouvée
 *       500:
 *         description: Erreur lors de la suppression de la brasserie
 */
router.delete('/breweries/:id', deleteBrewery);

export default router;
