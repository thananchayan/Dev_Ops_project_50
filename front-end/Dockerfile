# FROM node:14-alpine as build
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build

# FROM nginx:alpine
# COPY --from=build /app/build /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]



# Use the official Node.js image with Alpine Linux.
FROM node:20-alpine

# Set the working directory in the container to /app.
WORKDIR /app

# Copy package.json and package-lock.json (if available) to the working directory.
COPY package.json ./
COPY package-lock.json ./

# Install dependencies.
RUN npm install

# Install serve globally to serve the React application.
RUN npm install -g serve

# Copy the rest of the application code to the working directory.
COPY . .

# Build the React application.
RUN npm run build

# Expose the port that the application will run on.
EXPOSE 3000

# Command to run the application.
CMD ["serve", "-s", "build"]
