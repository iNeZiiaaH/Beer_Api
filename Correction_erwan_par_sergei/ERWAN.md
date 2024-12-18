# Correction de l'Exercice

## 📝 Critères de Correction

1. **Clonage du dépôt** :
   ✅ - [ ] git clone effectué avec succès.

2. **Configuration des variables d'environnement** :
   ✅ - [ ] Fichier .env généré et configuré correctement selon les recommandations.

3. **Construction et démarrage des conteneurs Docker** :
   ✅ - [ ] Commande docker-compose up --build exécutée sans erreurs.

4. **Tests CRUD avec Postman ou Hoppscotch** :
   ✅ - [ ] **GET** : Récupération des bières et brasseries.
   ✅ - [ ] **POST** : Ajout d'une nouvelle bière ou brasserie.
   ✅ - [ ] **PATCH/PUT** : Mise à jour d'une bière ou brasserie existante.
   ✅ - [ ] **DELETE** : Suppression d'une bière ou brasserie.

5. **Documentation de l'API avec Swagger** :
   ✅ - [ ] Page Swagger accessible et documentée pour l'API.

## 📋 Détails des Tests CRUD

### GET
✅ - URL : http://localhost:3000/api/beers
✅ - URL : http://localhost:3000/api/breweries

POST
✅ - URL : http://localhost:3000/api/beers
✅ - URL : http://localhost:3000/api/breweries
✅ - Body (JSON) :
  ``json
  {
    "nom": "Nom de la bière",
    "brasserie": "Nom de la brasserie",
    "type": "Type de bière",
    "degré": 5.0
  }