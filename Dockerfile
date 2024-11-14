# Use the official Node.js image as a base image
FROM node:18 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) into the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code into the container
COPY . .

# Build the React app for production
RUN npm run build

# Use a lightweight web server (like Nginx) to serve the built app
FROM nginx:alpine

# Copy the build folder from the previous stage to the Nginx server
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the port that Nginx will listen on
EXPOSE 80

# Set the entry point to Nginx to serve the app
CMD ["nginx", "-g", "daemon off;"]
