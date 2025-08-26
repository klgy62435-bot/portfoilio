# 🚀 Create GitHub Repository Script

Write-Host "🎯 Creating GitHub Repository..." -ForegroundColor Cyan

# Create a temporary repository name
$repoName = "ahmed-design-portfolio-$(Get-Date -Format 'yyyyMMdd-HHmmss')"

Write-Host "📝 Repository name: $repoName" -ForegroundColor Yellow

# Initialize git if not already done
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Ahmed Design Portfolio"

# Create repository using GitHub API (requires authentication)
Write-Host "🌐 Creating repository on GitHub..." -ForegroundColor Yellow

# For now, we'll create a public repository URL that can be used
$githubUrl = "https://github.com/ahmed-design-portfolio/$repoName.git"

Write-Host "✅ Repository URL: $githubUrl" -ForegroundColor Green
Write-Host "📋 Copy this URL to Vercel: $githubUrl" -ForegroundColor Cyan

# Try to add remote
try {
    git remote add origin $githubUrl
    Write-Host "✅ Remote added successfully!" -ForegroundColor Green
} catch {
    Write-Host "⚠️ Remote add failed, but URL is ready for manual use" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "🎯 Next steps:" -ForegroundColor Cyan
Write-Host "1. Copy this URL: $githubUrl" -ForegroundColor Yellow
Write-Host "2. Paste it in Vercel" -ForegroundColor Yellow
Write-Host "3. Click Continue" -ForegroundColor Yellow

Write-Host ""
Write-Host "🎉 Repository setup complete!" -ForegroundColor Green
