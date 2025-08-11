@echo off
echo 🧪 测试Jekyll构建...
echo.

echo 📦 检查依赖...
bundle --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Bundler未安装，请先安装Ruby和Bundler
    echo 访问: https://rubyinstaller.org/
    pause
    exit /b 1
)

echo ✅ Bundler已安装
echo.

echo 🔨 清理之前的构建...
bundle exec jekyll clean

echo 📝 安装依赖...
bundle install

echo 🚀 开始构建测试...
bundle exec jekyll build --safe

if %errorlevel% equ 0 (
    echo.
    echo ✅ 构建成功！
    echo 📁 构建文件位于 _site 目录
    echo 🌐 可以运行 .\run_server.bat 来预览网站
) else (
    echo.
    echo ❌ 构建失败！
    echo 请检查错误信息并修复问题
)

echo.
pause
