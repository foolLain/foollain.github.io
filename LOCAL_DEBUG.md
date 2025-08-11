# 🚀 本地调试指南

## 📋 前置要求

### 1. 安装Ruby
- **Windows用户**: 访问 [RubyInstaller](https://rubyinstaller.org/) 下载安装
- **macOS用户**: 使用 `brew install ruby` 或 [rbenv](https://github.com/rbenv/rbenv)
- **Linux用户**: 使用包管理器或 [rbenv](https://github.com/rbenv/rbenv)

### 2. 验证Ruby安装
```bash
ruby --version
# 应该显示类似: ruby 3.2.2p53 (2023-03-30 revision e51014f9c0) [x64-mingw32]
```

### 3. 安装Jekyll和Bundler
```bash
gem install bundler jekyll
```

## 🎯 快速启动

### 方法1: 使用PowerShell脚本（推荐）
```powershell
# 在PowerShell中运行
.\run_server.ps1
```

### 方法2: 使用批处理文件
```cmd
# 双击运行或在CMD中运行
run_server.bat
```

### 方法3: 手动运行
```bash
# 安装依赖
bundle install

# 启动服务器
bundle exec jekyll serve --livereload
```

## 🌐 访问网站

启动成功后，在浏览器中访问：
- **本地访问**: http://localhost:4000
- **局域网访问**: http://你的IP地址:4000

## 🔧 常用命令

### 开发模式（推荐）
```bash
bundle exec jekyll serve --liraeload
```
- 自动重新加载页面
- 实时预览更改
- 支持热重载

### 生产模式
```bash
bundle exec jekyll build
```
- 构建静态文件
- 输出到 `_site` 目录

### 清理构建
```bash
bundle exec jekyll clean
```
- 清理 `_site` 目录
- 清理缓存文件

## 📁 项目结构说明

```
foollain.github.io/
├── _config.yml          # 网站配置文件
├── _pages/              # 页面文件
│   └── favorites.md     # 我的喜爱页面
├── _includes/           # 包含文件
│   ├── visitor-stats.html  # 访客统计展板
│   └── sidebar.html     # 侧边栏
├── _sass/               # SCSS样式文件
│   ├── _favorites.scss  # 我的喜爱页面样式
│   └── _visitor-stats.scss # 访客统计样式
├── assets/              # 静态资源
│   ├── css/            # 编译后的CSS
│   └── js/             # JavaScript文件
└── Gemfile             # Ruby依赖配置
```

## 🎨 自定义开发

### 修改样式
1. 编辑 `_sass/` 目录下的SCSS文件
2. 保存后页面会自动重新加载
3. 样式更改会立即生效

### 修改页面内容
1. 编辑 `_pages/` 目录下的Markdown文件
2. 保存后页面会自动重新加载
3. 内容更改会立即生效

### 修改JavaScript
1. 编辑 `assets/js/` 目录下的JS文件
2. 保存后页面会自动重新加载
3. 功能更改会立即生效

## 🐛 常见问题解决

### 1. 端口被占用
```bash
# 使用其他端口
bundle exec jekyll serve --port 4001
```

### 2. 权限问题
```bash
# Windows用户可能需要以管理员身份运行PowerShell
# 或者检查防火墙设置
```

### 3. 依赖安装失败
```bash
# 清理并重新安装
bundle clean --force
bundle install
```

### 4. 样式不生效
```bash
# 清理缓存并重新构建
bundle exec jekyll clean
bundle exec jekyll serve
```

## 🔍 调试技巧

### 1. 查看控制台输出
- 服务器启动时会显示详细的日志信息
- 注意错误信息和警告

### 2. 浏览器开发者工具
- 使用F12打开开发者工具
- 查看Console、Network、Elements等标签页

### 3. 实时预览
- 使用 `--livereload` 参数实现实时预览
- 修改文件后页面会自动刷新

## 📱 移动端测试

### 1. 本地网络访问
```bash
bundle exec jekyll serve --host 0.0.0.0
```

### 2. 获取本机IP
```bash
# Windows
ipconfig

# macOS/Linux
ifconfig
```

### 3. 移动设备访问
- 确保手机和电脑在同一网络
- 访问 `http://你的IP地址:4000`

## 🎉 开始开发

现在你可以：
1. 运行启动脚本
2. 在浏览器中访问网站
3. 修改文件并实时预览效果
4. 调试和优化功能

祝你开发愉快！🚀
