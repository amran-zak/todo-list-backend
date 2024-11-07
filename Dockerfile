# Use the official Node.js image as the base image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install all dependencies (including dev dependencies for hot-reloading)
RUN npm install

# Copy the rest of the application files into the container
COPY . .
