# Use the secure slim image
FROM node:18-slim

# Set the working directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Expose the correct port
EXPOSE 8080

# Define the command to run the application
CMD [ "npm", "start" ]