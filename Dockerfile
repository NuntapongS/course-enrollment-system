FROM node:20-alpine

WORKDIR /app

# Install bun
RUN npm install -g bun

# Copy package files
COPY package.json bun.lockb* ./

# Install dependencies
RUN bun install --frozen-lockfile

# Copy source code
COPY . .

# Generate Drizzle types
RUN bun run drizzle-kit generate

# Expose port
EXPOSE 3000

# Start server
CMD ["bun", "run", "dev"]
