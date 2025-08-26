# 🚀 Deploy to GitHub Pages

Write-Host "🎯 Deploying to GitHub Pages..." -ForegroundColor Cyan

# Install gh-pages if not installed
Write-Host "📦 Installing gh-pages..." -ForegroundColor Yellow
npm install --save-dev gh-pages

# Build the project
Write-Host "🔨 Building project..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Build successful!" -ForegroundColor Green
} else {
    Write-Host "❌ Build failed!" -ForegroundColor Red
    exit 1
}

# Deploy to GitHub Pages
Write-Host "🚀 Deploying to GitHub Pages..." -ForegroundColor Cyan
npx gh-pages -d dist

if ($LASTEXITCODE -eq 0) {
    Write-Host "🎉 Deployment successful!" -ForegroundColor Green
    Write-Host "🌐 Your portfolio will be available at:" -ForegroundColor Cyan
    Write-Host "https://YOUR_USERNAME.github.io/ahmed-design-portfolio" -ForegroundColor Yellow
} else {
    Write-Host "❌ Deployment failed" -ForegroundColor Red
}

Write-Host ""
Write-Host "🎯 GitHub Pages deployment completed!" -ForegroundColor Cyan
