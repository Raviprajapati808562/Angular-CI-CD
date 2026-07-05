# Use official Node.js image
FROM node:22

# Create working directory inside container
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy remaining project files
COPY . .

# Angular development server port
EXPOSE 4000

# Start Angular application
CMD ["node","dist/my-angular-app2/server/server.mjs"]