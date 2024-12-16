import { Router } from 'express';
import beerRoutes from './BeerRoutes';
import brewerieRoutes from './BrewerieRoutes';
import categoryRoutes from './CategoryRoutes';
import ingredientRoutes from './IngredientRoutes';
import userRoutes from './UserRoutes';

const router = Router();

router.use('/', beerRoutes);
router.use('/', brewerieRoutes);
router.use('/', categoryRoutes);
router.use('/', ingredientRoutes);
router.use('/', userRoutes);

export default router;
