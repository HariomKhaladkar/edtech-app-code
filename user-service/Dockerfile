# Use an official Node.js runtime as the base image
FROM node:18-slim

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to leverage Docker's layer caching
COPY package*.json ./

# Install application dependencies
RUN npm install
RUN npm install -g npm@latest

# Copy the rest of the application source code into the container
COPY . .

# Expose the port the app runs on so it can be accessed from outside
EXPOSE 8080

# Define the command to run the application when the container starts
CMD [ "npm", "start" ]