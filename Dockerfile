# Use the official Playwright image (latest version)
FROM mcr.microsoft.com/playwright:v1.50.1

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json for dependency installation
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy all test files into the container
COPY . .

# Run Playwright tests
CMD ["npx", "playwright", "test"]
