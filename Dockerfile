# Image officielle Node.js
FROM node:20

# Créer le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et lock
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le reste
COPY . .

# Exposer le port utilisé par Next.js
EXPOSE 3000

# Lancer le serveur en dev
CMD ["npm", "run", "dev"]
