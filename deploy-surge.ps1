# 🚀 Deploy to Surge.sh (Alternative to Vercel)

Write-Host "🎯 Deploying to Surge.sh..." -ForegroundColor Cyan

# Check if surge is installed
Write-Host "📦 Checking Surge CLI..." -ForegroundColor Yellow

try {
    $surgeVersion = surge --version
    Write-Host "✅ Surge CLI found: $surgeVersion" -ForegroundColor Green
} catch {
    Write-Host "📥 Installing Surge CLI..." -ForegroundColor Yellow
    npm install -g surge
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Surge CLI installed successfully!" -ForegroundColor Green
    } else {
        Write-Host "❌ Failed to install Surge CLI" -ForegroundColor Red
        exit 1
    }
}

# Build the project
Write-Host "🔨 Building project..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Build successful!" -ForegroundColor Green
} else {
    Write-Host "❌ Build failed!" -ForegroundColor Red
    exit 1
}

# Deploy to Surge
Write-Host "🚀 Deploying to Surge.sh..." -ForegroundColor Cyan
Write-Host "📝 You may need to create a Surge account first..." -ForegroundColor Yellow

$domain = "ahmed-design-portfolio.surge.sh"
Write-Host "🌐 Deploying to: https://$domain" -ForegroundColor Green

surge dist $domain

if ($LASTEXITCODE -eq 0) {
    Write-Host "🎉 Deployment successful!" -ForegroundColor Green
    Write-Host "🌐 Your portfolio is live at: https://$domain" -ForegroundColor Cyan
    
    # Open the website
    Start-Process "https://$domain"
} else {
    Write-Host "❌ Deployment failed" -ForegroundColor Red
}

Write-Host ""
Write-Host "🎯 Surge deployment completed!" -ForegroundColor Cyan
