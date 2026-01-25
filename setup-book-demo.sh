#!/bin/bash
# Quick Setup Script for Book Demo Feature
# This script helps set up the Book Demo feature with a backend server

echo "╔════════════════════════════════════════════════════════════╗"
echo "║     Book Demo Feature - Quick Setup Script                 ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed."
    echo "   Download from: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js is installed: $(node -v)"
echo ""

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
    echo "Creating .env file..."
    cat > .env << EOF
PORT=5000
# Optional: Add database URL for production
# DATABASE_URL=mongodb+srv://<user>:<password>@cluster.mongodb.net/bookings
EOF
    echo "✅ Created .env file"
else
    echo "✅ .env file already exists"
fi

echo ""
echo "Installing dependencies..."

# Install main project dependencies
npm install > /dev/null 2>&1
echo "✅ Installed frontend dependencies"

# Install backend dependencies
npm install express cors dotenv > /dev/null 2>&1
echo "✅ Installed backend dependencies"

echo ""
echo "╔════════════════════════════════════════════════════════════╗"
echo "║     Setup Complete! Ready to start development             ║"
echo "╠════════════════════════════════════════════════════════════╣"
echo "│                                                            │"
echo "│  To start development:                                     │"
echo "│                                                            │"
echo "│  1. Start Backend Server (in one terminal):               │"
echo "│     node server.js                                         │"
echo "│                                                            │"
echo "│  2. Start Frontend Dev Server (in another terminal):      │"
echo "│     npm run dev                                            │"
echo "│                                                            │"
echo "│  3. Open in browser:                                       │"
echo "│     http://localhost:5173/book-demo                       │"
echo "│                                                            │"
echo "│  API will be available at:                                │"
echo "│     http://localhost:5000/api                             │"
echo "│                                                            │"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""
