# 🍺 **API de Gestion des Bières Artisanales**

## **Contexte du Projet**  

Cette API REST est la suite logique de l'application de gestion des bières artisanales. Elle permet de manipuler les informations sur les bières et les brasseries grâce à des opérations CRUD. 


---

## 📋 **Fonctionnalités**  

- **CRUD sur les bières** :  
  - Ajouter une nouvelle bière.  
  - Consulter la liste complète des bières ou les détails d'une bière spécifique.  
  - Modifier les informations d'une bière.  
  - Supprimer une bière de la base de données.  

- **CRUD sur les brasseries** :  
  - Gérer les informations des brasseries (ajout, mise à jour, suppression).  


---

## 🛠️ **Technologies et Outils Utilisés**  

Voici les liens ajoutés dans la section demandée :  

---

## 🛠️ **Technologies et Outils Utilisés**  

- **[Node.js](https://nodejs.org/)**  
- **[Express.js](https://expressjs.com/)**   
- **[TypeScript](https://www.typescriptlang.org/)** 
- **[PostgreSQL](https://www.postgresql.org/)**
- **[Swagger (OpenAPI)](https://swagger.io/)** 
- **[Docker](https://www.docker.com/) & [Docker Compose](https://docs.docker.com/compose/)** 

---  


## 🚀 **Installation et Configuration**  

### 1. **Clonez le dépôt**  
Téléchargez le projet sur votre machine :  
```bash
git clone https://github.com/iNeZiiaaH/Beer_Api.git
```  

### 2. **Configurer l'environnement**  
Créez un fichier `.env` a la racine du projet avec les variables suivantes :  
```env
DB_HOST=db
DB_PORT=5432
DB_USER=username
DB_PASSWORD=password
DB_NAME=madbname
API_PORT=3000
```  

### 3. **Lancer l'API avec Docker Compose**  
Démarrez les services :  
```bash
docker-compose up -d
```  

Vérifiez que les conteneurs sont bien actifs :  
```bash
docker-compose ps
```  

---

## 🔧 **Utilisation de l'API**  

### 🌐 Méthodes HTTP Principales  
| Méthode | Endpoint                | Description                      |  
|---------|-------------------------|----------------------------------|  
| GET     | `/api/beers`            | Liste toutes les bières          |  
| GET     | `/api/beers/:id`        | Détails d'une bière              |  
| POST    | `/api/beers`            | Ajoute une nouvelle bière        |  
| PUT     | `/api/beers/:id`        | Met à jour une bière existante   |  
| DELETE  | `/api/beers/:id`        | Supprime une bière               |  
| GET     | `/api/breweries`        | Liste toutes les brasseries      | 
| GET     | `/api/breweries/:id`    | Détails d'une Brasserie          | 
| POST    | `/api/breweries`        | Ajoute une nouvelle brasserie    |
| PUT     | `/api/breweries/:id`    | Modification d'une Brasserie     | 
| DELETE  | `/api/breweries/:id`    | Suppresion d'une brasserie       |  

---

## 📑 **Documentation de l'API**  

L'API est Gérer par swagger pour une meilleur interface  :  

📍 **URL Swagger** : [http://localhost:3000/api-docs](http://localhost:3000/api-docs)  

---

🍺 **En Avant toute Simone !**  