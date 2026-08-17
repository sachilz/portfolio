#!/bin/bash

# Exit on error
set -e

echo "Starting the project setup..."

# Check if Docker is installed and running
if command -v docker &> /dev/null && docker info &> /dev/null; then
    echo "Docker is available. Starting with Docker Compose..."
    
    # Try docker compose (v2) first, fallback to docker-compose (v1)
    if docker compose version &> /dev/null; then
        docker compose up --build -d
    elif command -v docker-compose &> /dev/null; then
        docker-compose up --build -d
    else
        echo "Docker Compose is not installed. Building and running plain Docker container..."
        docker build -t portfolio-app .
        # Stop existing container if any
        docker rm -f portfolio-app 2>/dev/null || true
        docker run -d -p 8080:80 --name portfolio-app portfolio-app
    fi
    echo "======================================================"
    echo "Project is running in Docker at: http://localhost:8080"
    echo "======================================================"
else
    echo "Docker is not available or not running."
    echo "Starting locally using Node.js..."
    
    if ! command -v npm &> /dev/null; then
        echo "Error: npm is not installed. Please install Node.js or Docker."
        exit 1
    fi
    
    echo "Installing dependencies..."
    npm install
    
    echo "Starting development server..."
    echo "======================================================"
    npm run dev
fi
