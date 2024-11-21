"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const beerRoutes_1 = __importDefault(require("./routes/beerRoutes"));
const dotenv_1 = __importDefault(require("dotenv"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
dotenv_1.default.config();
const app = (0, express_1.default)();
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
    apis: ['./src/routes/*.ts'], // Dossier des fichiers de routes à inclure dans la documentation
};
const swaggerSpec = (0, swagger_jsdoc_1.default)(swaggerOptions);
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec)); // Serveur Swagger
app.use(express_1.default.json());
app.use(beerRoutes_1.default);
app.get('/', (req, res) => {
    res.send('Bienvenue sur l\'API des bières !');
});
app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});
