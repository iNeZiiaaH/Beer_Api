import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0', 
    info: {
      title: 'Beer API',
      version: '1.0.0',
      description: 'API pour gérer les informations sur la bière',
    },
    servers: [
      {
        url: `http://localhost:${process.env.API_PORT || 3000}/api`, 
      },
    ],
  },
  apis: ['./src/routes/*.ts'],  
};

const swaggerSpec = swaggerJSDoc(options);

export { swaggerSpec, swaggerUi };
