import { Router } from 'express';
import beerRoutes from './beerRoutes';
import brewerieRoutes from './brewerieRoutes';
import categoryRoutes from './categoryRoutes';
import ingredientRoutes from './ingredientRoutes';
import userRoutes from './userRoutes';
import beerIngredientRoutes from './beerIngredientRoutes';

const router = Router();

router.use('/', beerRoutes);
router.use('/', brewerieRoutes);
router.use('/', categoryRoutes);
router.use('/', ingredientRoutes);
router.use('/', userRoutes);
router.use('/', beerIngredientRoutes);

export default router;
