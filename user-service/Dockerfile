# ===== Stage 1: The Builder "Factory" =====
# Use the slim image as our builder environment
FROM node:18-slim AS builder

# Set the working directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application source code
COPY . .

# ===== Stage 2: The Final "Command Module" =====
# Use a minimal, secure "distroless" image from Google. It contains only Node.js.
FROM gcr.io/distroless/nodejs18-debian12

# Set the working directory
WORKDIR /usr/src/app

# Copy ONLY the necessary parts from the "builder" stage:
# 1. The installed dependencies
# 2. The application code
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app ./

# Expose the correct port
EXPOSE 8080

# Define the command to run the application
CMD [ "server.js" ]