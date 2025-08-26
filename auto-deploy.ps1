# 🚀 Auto Deploy to Vercel Script

Write-Host "🎯 Starting Automatic Deployment to Vercel..." -ForegroundColor Cyan

# Check if vercel CLI is installed
Write-Host "📦 Checking Vercel CLI..." -ForegroundColor Yellow

try {
    $vercelVersion = vercel --version
    Write-Host "✅ Vercel CLI found: $vercelVersion" -ForegroundColor Green
} catch {
    Write-Host "📥 Installing Vercel CLI..." -ForegroundColor Yellow
    npm install -g vercel
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Vercel CLI installed successfully!" -ForegroundColor Green
    } else {
        Write-Host "❌ Failed to install Vercel CLI" -ForegroundColor Red
        Write-Host "🔧 Please install manually: npm install -g vercel" -ForegroundColor Yellow
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

# Deploy to Vercel
Write-Host "🚀 Deploying to Vercel..." -ForegroundColor Cyan
Write-Host "📝 You may need to login to Vercel first..." -ForegroundColor Yellow

vercel --prod

if ($LASTEXITCODE -eq 0) {
    Write-Host "🎉 Deployment successful!" -ForegroundColor Green
    Write-Host "🌐 Your portfolio is now live!" -ForegroundColor Cyan
} else {
    Write-Host "❌ Deployment failed" -ForegroundColor Red
    Write-Host "🔧 Please check the error above" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "🎯 Deployment script completed!" -ForegroundColor Cyan
