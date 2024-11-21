import express from 'express';
import beerRoutes from './routes/beerRoutes';
import dotenv from 'dotenv';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

dotenv.config();

const app = express();
const port = process.env.API_PORT || 3000;

// Configuration Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0', 
    info: {
      title: 'Beer API',
      version: '1.0.0',
      description: 'API pour gérer les informations sur la bière',
    },
    servers: [
      {
        url: `http://localhost:${port}`, 
      },
    ],
  },
  apis: ['./src/routes/*.ts'], 
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec)); // Serveur Swagger

app.use(express.json());
app.use(beerRoutes);

app.get('/', (req, res) => {
  res.send('Bienvenue sur l\'API des bières !');
});

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
