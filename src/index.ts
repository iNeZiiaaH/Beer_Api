import express from 'express';
import { swaggerSpec, swaggerUi } from './swagger';
import beerRoutes from './routes/beerRoutes';
import brewerieRoutes from './routes/brewerieRoutes';

const app = express();

// Middleware pour le JSON
app.use(express.json());

// Swagger pour afficher l'interface de l'API
app.use('/api/biere-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Utilisation des routes
app.use('/api', beerRoutes);
app.use('/api', brewerieRoutes);

const port = process.env.API_PORT || 3000;
app.listen(port, () => {
  console.log(`API des bières sur http://localhost:${port}`);
  console.log(`Swagger api Beer sur http://localhost:${port}/api/biere-docs`);
});
