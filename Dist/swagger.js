"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerUi = exports.swaggerSpec = void 0;
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
exports.swaggerUi = swagger_ui_express_1.default;
const options = {
    definition: {
        openapi: '3.0.0', // Version de l'OpenAPI
        info: {
            title: 'Beer API',
            version: '1.0.0',
            description: 'API pour gérer les informations sur la bière',
        },
        servers: [
            {
                url: `http://localhost:${process.env.API_PORT || 3000}`, // Dynamique selon la variable d'environnement
            },
        ],
    },
    apis: ['./src/routes/*.ts'], // Dossier contenant les fichiers avec les annotations Swagger
};
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
exports.swaggerSpec = swaggerSpec;
