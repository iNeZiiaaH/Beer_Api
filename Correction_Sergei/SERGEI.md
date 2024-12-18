# Sergei Correction

## Étapes

### 1. Clonage du dépôt Git
- **✅ Commande utilisée** :
  ```bash
  git clone https://github.com/sergeimlk/NpmNodeExpress.git
  ```
- **✅ Résultat** : Le dépôt a été cloné avec succès.

### 2. Configuration du fichier .env
- **✅ Action** : Création du fichier `.env`
- **✅ Résultat** : La config a bien fonctionné.

### 3. Lancement avec Docker Compose
- **✅ Commande utilisée** :
  ```bash
  docker-compose up --build
  ```
- **✅ Résultat** : Les services se sont lancés correctement sans erreurs.

### 4. Tests CRUD avec Postman
- **✅ Outils utilisés** : Postman

#### Bières
- **✅ GET** : Fonctionne correctement, les bières sont listées.
- **✅ POST** : Ajout d'une nouvelle bière réussi.
- **✅ PUT** : Mise à jour des informations d'une bière réussie.
- **✅ DELETE** : Suppression d'une bière effectuée avec succès.

#### Brasseries
- **✅ GET** : Fonctionne correctement, les brasseries sont listées.
- **✅ POST** : Ajout d'une nouvelle brasserie réussi.
- **✅ PATCH/PUT** : Mise à jour des informations d'une brasserie réussie.
- **✅ DELETE** : Suppression d'une brasserie effectuée avec succès.

### 5. Documentation Swagger
- **❌ Swagger** : La documentation Swagger **n'a pas été configurée**.

## Conclusion
Toutes les étapes ont été réalisées avec succès sans rencontrer de problèmes. Le projet fonctionne. Manque juste la config Swagger et l'interface.