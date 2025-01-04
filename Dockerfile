# Step 1: Build react app
FROM node:alpine3.18 as build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build  # This will use Vite to build the app

# Step 2: Serve with Nginx
FROM nginx:1.21.3-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf *
# Copy the build output from the 'dist' directory, as that's where Vite outputs the build
COPY --from=build /app/dist .  
EXPOSE 80
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
