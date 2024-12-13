import { Router } from 'express';
import beerRoutes from './beerRoutes';
import brewerieRoutes from './brewerieRoutes';
import categoryRoutes from './categoryRoutes';
import ingredientRoutes from './ingredientRoutes';
import userRoutes from './userRoutes';

const router = Router();

router.use('/', beerRoutes);
router.use('/', brewerieRoutes);
router.use('/', categoryRoutes);
router.use('/', ingredientRoutes);
router.use('/', userRoutes);

export default router;
