# Use an official Node runtime as the parent image
FROM node:16

# Set the working directory in the container
WORKDIR /frontend

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install the app dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# The default port Next.js runs on is 3000
EXPOSE 3000

# Define the command to run the app
CMD ["npm", "run", "dev"]
