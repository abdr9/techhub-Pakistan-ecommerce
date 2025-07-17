# GitHub Pages Deployment Instructions

## Step 1: Create GitHub Repository
1. Go to https://github.com
2. Click "New repository"
3. Name: `techhub-pakistan-ecommerce`
4. Description: `E-commerce website for TechHub Pakistan - Custom PC builds and components`
5. Set to **Public**
6. DON'T initialize with README
7. Click "Create repository"

## Step 2: Connect and Push Code
Your GitHub username is: **abdr9**

```powershell
# Add remote repository (ALREADY DONE)
git remote add origin https://github.com/abdr9/techhub-pakistan-ecommerce.git

# Push to GitHub (RUN AFTER CREATING REPO)
git push -u origin main
```

## Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section (left sidebar)
4. Under "Source", select "Deploy from a branch"
5. Choose "main" branch
6. Choose "/ (root)" folder
7. Click "Save"

## Step 4: Access Your Website
After 2-3 minutes, your website will be live at:
```
https://abdr9.github.io/techhub-pakistan-ecommerce
```

## Troubleshooting
- If you get authentication errors, you may need to create a Personal Access Token
- Go to GitHub Settings > Developer settings > Personal access tokens
- Generate a new token with repo permissions
- Use this token as your password when pushing

## Update Website
To update your website:
```powershell
git add .
git commit -m "Update website content"
git push origin main
```

GitHub Pages will automatically rebuild and deploy your changes!
