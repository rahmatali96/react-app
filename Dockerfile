# Use the official Node.js image as a base image
FROM node:18-alpine AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to the working directory
COPY package.json ./
COPY package-lock.json ./
# If you use yarn, replace the above line with COPY yarn.lock ./

# Install dependencies
RUN npm install
# If you use yarn, replace the above line with RUN yarn install

# Copy the rest of the application code to the working directory
COPY . .

# Build the application
RUN npm run build
# If you use yarn, replace the above line with RUN yarn build

# Use a smaller image for the production stage
