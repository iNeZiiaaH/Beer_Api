import dotenv from 'dotenv';
import { Client } from 'pg';

dotenv.config();

// Configuration de la connexion PostgreSQL
const client = new Client({
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432', 10),
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
});

// Connexion à la base de données
client.connect()
    .then(() => console.log('Connexion réussie à la base de données PostgreSQL'))
    .catch(err => console.error('Erreur de connexion à PostgreSQL:', err));

export default client;