# 🚀 Auto Deploy Script for Ahmed Design Portfolio

Write-Host "🎯 Starting Auto Deployment..." -ForegroundColor Cyan

# Build the project
Write-Host "📦 Building project..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Build successful!" -ForegroundColor Green
} else {
    Write-Host "❌ Build failed!" -ForegroundColor Red
    exit 1
}

# Create deployment package
Write-Host "📁 Creating deployment package..." -ForegroundColor Yellow
if (Test-Path "portfolio-deploy.zip") {
    Remove-Item "portfolio-deploy.zip" -Force
}

Compress-Archive -Path "dist\*" -DestinationPath "portfolio-deploy.zip" -Force

Write-Host "✅ Deployment package created: portfolio-deploy.zip" -ForegroundColor Green

# Instructions
Write-Host ""
Write-Host "🎉 Portfolio is ready for deployment!" -ForegroundColor Cyan
Write-Host ""
Write-Host "📋 Next steps:" -ForegroundColor White
Write-Host "1. Go to: https://app.netlify.com/drop" -ForegroundColor Yellow
Write-Host "2. Drag and drop: portfolio-deploy.zip" -ForegroundColor Yellow
Write-Host "3. Wait for deployment to complete" -ForegroundColor Yellow
Write-Host "4. Get your live URL!" -ForegroundColor Yellow
Write-Host ""
Write-Host "🌐 Your portfolio will be live in 2-3 minutes!" -ForegroundColor Green

# Open Netlify Drop page
Write-Host "🌐 Opening Netlify Drop page..." -ForegroundColor Cyan
Start-Process "https://app.netlify.com/drop"

Write-Host ""
Write-Host "🎯 Deployment script completed!" -ForegroundColor Cyan
