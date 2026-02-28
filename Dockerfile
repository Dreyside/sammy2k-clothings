## Build stage: compile Angular app
FROM node:20-alpine AS build

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy source and build
COPY . .
RUN npm run build

## Runtime stage: serve with nginx
FROM nginx:stable-alpine AS runtime

# Copy custom nginx configuration for SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built Angular app
COPY --from=build /app/dist/obasam-clothing /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

