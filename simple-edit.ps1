Write-Host "TechHub Pakistan Website Editor" -ForegroundColor Green
Write-Host "=================================" -ForegroundColor Green
Write-Host ""
Write-Host "What would you like to edit?" -ForegroundColor Cyan
Write-Host "1. Open VS Code to edit website" -ForegroundColor White
Write-Host "2. Push changes to GitHub" -ForegroundColor White
Write-Host "3. View editing guide" -ForegroundColor White
Write-Host ""

$choice = Read-Host "Enter your choice (1-3)"

if ($choice -eq "1") {
    Write-Host "Opening VS Code..." -ForegroundColor Green
    code .
    Write-Host "VS Code opened! Edit your files and save with Ctrl+S" -ForegroundColor Green
}
elseif ($choice -eq "2") {
    Write-Host "Pushing changes to GitHub..." -ForegroundColor Green
    $message = Read-Host "Enter commit message"
    if (-not $message) {
        $message = "Updated website content"
    }
    
    git add .
    git commit -m $message
    git push origin main
    
    Write-Host "Changes pushed! Your website will update in 2-3 minutes" -ForegroundColor Green
    Write-Host "https://abdr9.github.io/techhub-Pakistan-ecommerce" -ForegroundColor Blue
}
elseif ($choice -eq "3") {
    Write-Host "Opening editing guide..." -ForegroundColor Green
    notepad.exe "HOW_TO_EDIT_WEBSITE.md"
}
else {
    Write-Host "Invalid choice" -ForegroundColor Red
}
