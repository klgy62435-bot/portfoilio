# 🚀 Auto Deploy to Multiple Platforms

Write-Host "🎯 Starting Multi-Platform Deployment..." -ForegroundColor Cyan

# Build the project
Write-Host "🔨 Building project..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Build successful!" -ForegroundColor Green
} else {
    Write-Host "❌ Build failed!" -ForegroundColor Red
    exit 1
}

# Create deployment packages
Write-Host "📦 Creating deployment packages..." -ForegroundColor Yellow

# Clean old packages
if (Test-Path "*.zip") {
    Remove-Item "*.zip" -Force
}

# Create different packages for different platforms
Compress-Archive -Path "dist\*" -DestinationPath "netlify-deploy.zip" -Force
Compress-Archive -Path "dist\*" -DestinationPath "vercel-deploy.zip" -Force
Compress-Archive -Path "dist\*" -DestinationPath "render-deploy.zip" -Force

Write-Host "✅ Deployment packages created!" -ForegroundColor Green

# Open deployment platforms
Write-Host "🌐 Opening deployment platforms..." -ForegroundColor Cyan

Write-Host "📋 Deployment Options:" -ForegroundColor White
Write-Host "1. Netlify Drop: https://app.netlify.com/drop" -ForegroundColor Yellow
Write-Host "2. Vercel: https://vercel.com/new" -ForegroundColor Yellow
Write-Host "3. Render: https://render.com" -ForegroundColor Yellow
Write-Host "4. Railway: https://railway.app" -ForegroundColor Yellow

# Open platforms
Start-Process "https://app.netlify.com/drop"
Start-Sleep 2
Start-Process "https://vercel.com/new"
Start-Sleep 2
Start-Process "https://render.com"

Write-Host ""
Write-Host "🎉 All platforms opened!" -ForegroundColor Green
Write-Host "📁 Drag any of these files to deploy:" -ForegroundColor Cyan
Write-Host "   - netlify-deploy.zip (for Netlify)" -ForegroundColor Yellow
Write-Host "   - vercel-deploy.zip (for Vercel)" -ForegroundColor Yellow
Write-Host "   - render-deploy.zip (for Render)" -ForegroundColor Yellow

Write-Host ""
Write-Host "🎯 Multi-platform deployment ready!" -ForegroundColor Cyan
