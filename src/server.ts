import express from 'express';
import { swaggerSpec, swaggerUi } from './swagger';
import apiRoutes from './routes/apiRoutes';

const app = express();

// Middleware pour le JSON
app.use(express.json());

// Swagger pour afficher l'interface de l'API
app.use('/api/biere-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Utilisation des routes
app.use('/api', apiRoutes);

// Fonction pour démarrer le serveur
export const startServer = (port: number | string) => {
    app.listen(port, () => {
        console.log(`API des bières sur http://localhost:${port}`);
        console.log(`Swagger API Beer sur http://localhost:${port}/api/biere-docs`);
    });
};