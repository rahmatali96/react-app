# Use the official Node.js image as a base image
FROM node:18-alpine AS build_image

# Set the working directory in the container
WORKDIR /app/react-app

# Copy package.json and package-lock.json (or yarn.lock) to the working directory
COPY package.json .
# If you use yarn, replace the above line with COPY yarn.lock ./

# Install dependencies
RUN npm install
# If you use yarn, replace the above line with RUN yarn install

# Copy the rest of the application code to the working directory
COPY . .

# expose the application port
EXPOSE 8080

# Run the application
CMD [ "npm", "run", "dev" ]