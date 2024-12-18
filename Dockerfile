FROM node:22

# Définit le répertoire de travail
WORKDIR /usr/src/API_BEER

# Copie les fichiers package.json 
COPY package*.json ./

# Installe les dépendances
RUN npm install

# Copie le reste des fichiers de l'application
COPY . .

ENV DEBUG=*

#le port de l'API 
EXPOSE 3000

# Démarre l'appli
CMD ["npm", "run", "start"]