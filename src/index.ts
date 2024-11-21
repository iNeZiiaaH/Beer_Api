import express from 'express';
import { swaggerSpec, swaggerUi } from './swagger';
import beerRoutes from './routes/beerRoutes';

const app = express();

// Middleware pour parser le corps des requêtes en JSON
app.use(express.json());

// Swagger UI pour afficher la documentation de l'API
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Utilisation des routes
app.use('/api', beerRoutes);

const port = process.env.API_PORT || 3000;
app.listen(port, () => {
  console.log(`API en écoute sur http://localhost:${port}`);
});
