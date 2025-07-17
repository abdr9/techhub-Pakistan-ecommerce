# TechHub Pakistan - Quick Deployment Script
# This script helps you deploy your e-commerce website

Write-Host "TechHub Pakistan - Website Deployment Helper" -ForegroundColor Green
Write-Host "==========================================" -ForegroundColor Green

# Check if git is initialized
if (-not (Test-Path ".git")) {
    Write-Host "Initializing Git repository..." -ForegroundColor Yellow
    git init
    git add .
    git commit -m "Initial commit - TechHub Pakistan e-commerce website"
}

Write-Host ""
Write-Host "Deployment Options:" -ForegroundColor Cyan
Write-Host "1. GitHub Pages (Free)" -ForegroundColor White
Write-Host "2. Netlify (Free with custom domain)" -ForegroundColor White
Write-Host "3. Vercel (Free)" -ForegroundColor White
Write-Host "4. Firebase Hosting (Free)" -ForegroundColor White
Write-Host "5. Local Testing" -ForegroundColor White
Write-Host ""

$choice = Read-Host "Select deployment option (1-5)"

switch ($choice) {
    "1" {
        Write-Host "GitHub Pages selected!" -ForegroundColor Green
        Write-Host "Steps:" -ForegroundColor Yellow
        Write-Host "1. Create a repository on GitHub"
        Write-Host "2. Run: git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git"
        Write-Host "3. Run: git branch -M main"
        Write-Host "4. Run: git push -u origin main"
        Write-Host "5. Enable GitHub Pages in repository settings"
    }
    "2" {
        Write-Host "Netlify selected!" -ForegroundColor Green
        Write-Host "Steps:" -ForegroundColor Yellow
        Write-Host "1. Push code to GitHub first"
        Write-Host "2. Visit netlify.com and connect your GitHub repo"
        Write-Host "3. Deploy automatically"
        Write-Host "netlify.toml file has been created for you!"
    }
    "3" {
        Write-Host "Vercel selected!" -ForegroundColor Green
        Write-Host "Steps:" -ForegroundColor Yellow
        Write-Host "1. Push code to GitHub first"
        Write-Host "2. Visit vercel.com and import your GitHub repo"
        Write-Host "3. Deploy automatically"
        Write-Host "vercel.json file has been created for you!"
    }
    "4" {
        Write-Host "Firebase Hosting selected!" -ForegroundColor Green
        Write-Host "Steps:" -ForegroundColor Yellow
        Write-Host "1. Install: npm install -g firebase-tools"
        Write-Host "2. Login: firebase login"
        Write-Host "3. Initialize: firebase init hosting"
        Write-Host "4. Deploy: firebase deploy"
        Write-Host "firebase.json file has been created for you!"
    }
    "5" {
        Write-Host "Starting local server..." -ForegroundColor Green
        Write-Host "Visit: http://localhost:8000" -ForegroundColor Yellow
        if (Get-Command python -ErrorAction SilentlyContinue) {
            python -m http.server 8000
        } else {
            Write-Host "Python not found. Please install Python or use another method." -ForegroundColor Red
        }
    }
    default {
        Write-Host "Invalid option selected!" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "Your website files are ready in: $PWD" -ForegroundColor Green
Write-Host "Good luck with your TechHub Pakistan e-commerce store!" -ForegroundColor Green
