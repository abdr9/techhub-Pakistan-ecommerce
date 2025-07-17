# Easy Website Editor for TechHub Pakistan
# This script helps beginners edit common website elements

Write-Host "🎯 TechHub Pakistan Website Editor" -ForegroundColor Green
Write-Host "===================================" -ForegroundColor Green
Write-Host ""

Write-Host "What would you like to edit?" -ForegroundColor Cyan
Write-Host "1. Store Name and Branding" -ForegroundColor White
Write-Host "2. Contact Information" -ForegroundColor White
Write-Host "3. Product Information" -ForegroundColor White
Write-Host "4. About Section" -ForegroundColor White
Write-Host "5. Colors and Theme" -ForegroundColor White
Write-Host "6. Open VS Code for manual editing" -ForegroundColor White
Write-Host "7. Preview website locally" -ForegroundColor White
Write-Host "8. Push changes to GitHub" -ForegroundColor White
Write-Host ""

$choice = Read-Host "Enter your choice (1-8)"

switch ($choice) {
    "1" {
        Write-Host "🏪 Store Name & Branding Editor" -ForegroundColor Green
        Write-Host "Current store name: TechHub Pakistan" -ForegroundColor Yellow
        $newName = Read-Host "Enter new store name (or press Enter to keep current)"
        
        if ($newName) {
            Write-Host "To change store name:" -ForegroundColor Cyan
            Write-Host "1. Open index.html in VS Code" -ForegroundColor White
            Write-Host "2. Find line 16: <h1><i class=`"fas fa-desktop`"></i> TechHub Pakistan</h1>" -ForegroundColor White
            Write-Host "3. Replace 'TechHub Pakistan' with '$newName'" -ForegroundColor White
            Write-Host "4. Save the file (Ctrl+S)" -ForegroundColor White
        }
    }
    "2" {
        Write-Host "📞 Contact Information Editor" -ForegroundColor Green
        Write-Host "Current contact details:" -ForegroundColor Yellow
        Write-Host "- Address: Plaza 123, Main Boulevard, Gulberg III, Lahore, Pakistan"
        Write-Host "- Phone: +92 300 1234567"
        Write-Host "- Email: info@techhubpakistan.com"
        Write-Host ""
        
        $newAddress = Read-Host "Enter new address (or press Enter to skip)"
        $newPhone = Read-Host "Enter new phone (or press Enter to skip)"
        $newEmail = Read-Host "Enter new email (or press Enter to skip)"
        
        Write-Host "To update contact information:" -ForegroundColor Cyan
        Write-Host "1. Open index.html in VS Code" -ForegroundColor White
        Write-Host "2. Search for 'Plaza 123' (around line 300)" -ForegroundColor White
        Write-Host "3. Replace with your details" -ForegroundColor White
        Write-Host "4. Save the file (Ctrl+S)" -ForegroundColor White
    }
    "3" {
        Write-Host "🛍️ Product Information Editor" -ForegroundColor Green
        Write-Host "Current products:" -ForegroundColor Yellow
        Write-Host "- NVIDIA RTX 4090 - ₨ 450,000"
        Write-Host "- Intel Core i9-13900K - ₨ 120,000"
        Write-Host "- AMD Ryzen 9 7950X - ₨ 135,000"
        Write-Host "- And more..."
        Write-Host ""
        
        Write-Host "To update products:" -ForegroundColor Cyan
        Write-Host "1. Open index.html in VS Code" -ForegroundColor White
        Write-Host "2. Search for 'Featured Products' (around line 127)" -ForegroundColor White
        Write-Host "3. Edit product names and prices" -ForegroundColor White
        Write-Host "4. Save the file (Ctrl+S)" -ForegroundColor White
    }
    "4" {
        Write-Host "ℹ️ About Section Editor" -ForegroundColor Green
        Write-Host "Current about text:" -ForegroundColor Yellow
        Write-Host "We are Pakistan's leading provider of custom PC builds..."
        Write-Host ""
        
        Write-Host "To update about section:" -ForegroundColor Cyan
        Write-Host "1. Open index.html in VS Code" -ForegroundColor White
        Write-Host "2. Search for 'About TechHub Pakistan' (around line 258)" -ForegroundColor White
        Write-Host "3. Edit the description" -ForegroundColor White
        Write-Host "4. Save the file (Ctrl+S)" -ForegroundColor White
    }
    "5" {
        Write-Host "🎨 Colors & Theme Editor" -ForegroundColor Green
        Write-Host "Current main color: Blue (#4285f4)" -ForegroundColor Yellow
        Write-Host ""
        Write-Host "Popular color options:" -ForegroundColor Cyan
        Write-Host "- Red: #ff4444" -ForegroundColor Red
        Write-Host "- Green: #4caf50" -ForegroundColor Green
        Write-Host "- Orange: #ff9800" -ForegroundColor Yellow
        Write-Host "- Purple: #9c27b0" -ForegroundColor Magenta
        Write-Host ""
        
        Write-Host "To change colors:" -ForegroundColor Cyan
        Write-Host "1. Open styles.css in VS Code" -ForegroundColor White
        Write-Host "2. Search for '#4285f4' (appears multiple times)" -ForegroundColor White
        Write-Host "3. Replace with your preferred color" -ForegroundColor White
        Write-Host "4. Save the file (Ctrl+S)" -ForegroundColor White
    }
    "6" {
        Write-Host "🔧 Opening VS Code..." -ForegroundColor Green
        code .
        Write-Host "VS Code opened! Happy editing!" -ForegroundColor Green
    }
    "7" {
        Write-Host "👀 Starting local preview..." -ForegroundColor Green
        Write-Host "Install Live Server extension in VS Code for best experience" -ForegroundColor Yellow
        Write-Host "Or visit: http://localhost:8000" -ForegroundColor Cyan
        if (Get-Command python -ErrorAction SilentlyContinue) {
            python -m http.server 8000
        } else {
            Write-Host "Python not found. Please install Python or use Live Server in VS Code." -ForegroundColor Red
        }
    }
    "8" {
        Write-Host "🚀 Pushing changes to GitHub..." -ForegroundColor Green
        $message = Read-Host "Enter commit message (describe your changes)"
        if (-not $message) {
            $message = "Updated website content"
        }
        
        git add .
        git commit -m $message
        git push origin main
        
        Write-Host "✅ Changes pushed to GitHub!" -ForegroundColor Green
        Write-Host "Your website will update in 2-3 minutes at:" -ForegroundColor Cyan
        Write-Host "https://abdr9.github.io/techhub-Pakistan-ecommerce" -ForegroundColor Blue
    }
    default {
        Write-Host "Invalid choice. Please run the script again." -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "💡 Pro Tips:" -ForegroundColor Yellow
Write-Host "- Always test changes locally first" -ForegroundColor White
Write-Host "- Make small changes one at a time" -ForegroundColor White
Write-Host "- Use Ctrl+S to save in VS Code" -ForegroundColor White
Write-Host "- Clear browser cache (Ctrl+F5) to see changes" -ForegroundColor White
Write-Host ""
Write-Host "Happy editing! 🎉" -ForegroundColor Green
