# Etap 1: Budowanie aplikacji
FROM node:18-alpine AS build

# Ustaw katalog roboczy
WORKDIR /app

# Kopiowanie plików zależności
COPY package*.json ./

# Instalacja zależności
RUN npm install

# Kopiowanie reszty plików aplikacji
COPY . .

# Budowanie aplikacji dla produkcji
RUN npm run build

# Etap 2: Serwowanie aplikacji
FROM nginx:stable-alpine

# Kopiowanie zbudowanych plików z poprzedniego etapu
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Eksponowanie portu Nginx
EXPOSE 80

# Start serwera Nginx
CMD ["nginx", "-g", "daemon off;"]
