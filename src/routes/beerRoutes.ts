import express from 'express';
import { createBeer, getAllBeers, getBeerById, updateBeer, deleteBeer } from '../controllers/beerController';

const router = express.Router();

router.post('/beers', createBeer);
router.get('/beers', getAllBeers);
router.get('/beers/:id', getBeerById);
router.put('/beers/:id', updateBeer);
router.delete('/beers/:id', deleteBeer);

export default router;
