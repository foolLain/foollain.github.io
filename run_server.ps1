# Jekyll本地服务器启动脚本
Write-Host "🎯 正在启动Jekyll本地服务器..." -ForegroundColor Green
Write-Host ""

# 检查Ruby是否安装
try {
    $rubyVersion = ruby --version 2>$null
    if ($rubyVersion) {
        Write-Host "✅ Ruby已安装: $rubyVersion" -ForegroundColor Green
    } else {
        throw "Ruby未找到"
    }
} catch {
    Write-Host "❌ Ruby未安装或未添加到PATH" -ForegroundColor Red
    Write-Host "请访问 https://rubyinstaller.org/ 安装Ruby" -ForegroundColor Yellow
    Write-Host "安装完成后重新运行此脚本" -ForegroundColor Yellow
    Read-Host "按任意键退出"
    exit 1
}

# 检查Bundler是否安装
try {
    $bundleVersion = bundle --version 2>$null
    if ($bundleVersion) {
        Write-Host "✅ Bundler已安装: $bundleVersion" -ForegroundColor Green
    } else {
        throw "Bundler未找到"
    }
} catch {
    Write-Host "❌ Bundler未安装" -ForegroundColor Red
    Write-Host "正在安装Bundler..." -ForegroundColor Yellow
    gem install bundler
}

# 检查Jekyll是否安装
try {
    $jekyllVersion = jekyll --version 2>$null
    if ($jekyllVersion) {
        Write-Host "✅ Jekyll已安装: $jekyllVersion" -ForegroundColor Green
    } else {
        throw "Jekyll未找到"
    }
} catch {
    Write-Host "❌ Jekyll未安装" -ForegroundColor Red
    Write-Host "正在安装Jekyll..." -ForegroundColor Yellow
    gem install jekyll
}

# 安装依赖
Write-Host "📦 正在安装项目依赖..." -ForegroundColor Yellow
bundle install

# 启动服务器
Write-Host "🚀 启动Jekyll服务器..." -ForegroundColor Green
Write-Host "网站将在 http://localhost:4000 上运行" -ForegroundColor Cyan
Write-Host "按 Ctrl+C 停止服务器" -ForegroundColor Yellow
Write-Host ""

bundle exec jekyll serve --livereload --host 0.0.0.0
