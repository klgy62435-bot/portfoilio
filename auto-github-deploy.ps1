# 🚀 Auto GitHub Deploy Script

Write-Host "🎯 Starting GitHub Deployment..." -ForegroundColor Cyan

# Generate unique repository name
$timestamp = Get-Date -Format "yyyyMMdd-HHmmss"
$repoName = "ahmed-design-portfolio-$timestamp"

Write-Host "📝 Repository name: $repoName" -ForegroundColor Yellow

# Add remote
$githubUrl = "https://github.com/ahmed-design-portfolio/$repoName.git"
Write-Host "🔗 Repository URL: $githubUrl" -ForegroundColor Green

try {
    git remote add origin $githubUrl
    Write-Host "✅ Remote added successfully!" -ForegroundColor Green
} catch {
    Write-Host "⚠️ Remote already exists, updating..." -ForegroundColor Yellow
    git remote set-url origin $githubUrl
}

# Set branch
git branch -M main

Write-Host "📦 Repository ready for deployment!" -ForegroundColor Green
Write-Host ""
Write-Host "🎯 Use this URL in Vercel:" -ForegroundColor Cyan
Write-Host "$githubUrl" -ForegroundColor Yellow
Write-Host ""
Write-Host "📋 Vercel Steps:" -ForegroundColor White
Write-Host "1. Go to: https://vercel.com/new" -ForegroundColor Yellow
Write-Host "2. Import Git Repository" -ForegroundColor Yellow
Write-Host "3. Paste URL: $githubUrl" -ForegroundColor Yellow
Write-Host "4. Framework: Vite" -ForegroundColor Yellow
Write-Host "5. Build Command: npm run build" -ForegroundColor Yellow
Write-Host "6. Output Directory: dist" -ForegroundColor Yellow
Write-Host "7. Deploy!" -ForegroundColor Yellow

# Open Vercel
Write-Host ""
Write-Host "🌐 Opening Vercel..." -ForegroundColor Cyan
Start-Process "https://vercel.com/new"

Write-Host ""
Write-Host "🎉 GitHub deployment ready!" -ForegroundColor Green
