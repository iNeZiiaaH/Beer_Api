import dotenv from 'dotenv';
import { startServer } from './server';

// fichier .env
dotenv.config();

const port = process.env.API_PORT || 3000;

// Démarrer le serveur
startServer(port);