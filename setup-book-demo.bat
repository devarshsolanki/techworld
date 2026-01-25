@echo off
REM Quick Setup Script for Book Demo Feature (Windows)
REM This script helps set up the Book Demo feature with a backend server

setlocal enabledelayedexpansion

echo.
echo ╔════════════════════════════════════════════════════════════╗
echo ║     Book Demo Feature - Quick Setup Script (Windows)        ║
echo ╚════════════════════════════════════════════════════════════╝
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if errorlevel 1 (
    echo ❌ Node.js is not installed.
    echo    Download from: https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js is installed
node -v
echo.

REM Create .env file if it doesn't exist
if not exist .env (
    echo Creating .env file...
    (
        echo PORT=5000
        echo REM Optional: Add database URL for production
        echo REM DATABASE_URL=mongodb+srv://^<user^>:^<password^>@cluster.mongodb.net/bookings
    ) > .env
    echo ✅ Created .env file
) else (
    echo ✅ .env file already exists
)

echo.
echo Installing dependencies...

REM Install main project dependencies
call npm install >nul 2>&1
echo ✅ Installed frontend dependencies

REM Install backend dependencies
call npm install express cors dotenv >nul 2>&1
echo ✅ Installed backend dependencies

echo.
echo ╔════════════════════════════════════════════════════════════╗
echo ║     Setup Complete! Ready to start development             ║
echo ╠════════════════════════════════════════════════════════════╣
echo │                                                            │
echo │  To start development:                                     │
echo │                                                            │
echo │  1. Start Backend Server (in one terminal):               │
echo │     node server.js                                         │
echo │                                                            │
echo │  2. Start Frontend Dev Server (in another terminal):      │
echo │     npm run dev                                            │
echo │                                                            │
echo │  3. Open in browser:                                       │
echo │     http://localhost:5173/book-demo                       │
echo │                                                            │
echo │  API will be available at:                                │
echo │     http://localhost:5000/api                             │
echo │                                                            │
echo ╚════════════════════════════════════════════════════════════╝
echo.

pause
