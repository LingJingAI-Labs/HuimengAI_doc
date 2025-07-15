# HuimengAI 文档站点

一个基于 VitePress 构建的现代化文档网站，展示 HuimengAI 产品的功能特性和使用指南。

## ✨ 特性

- 🎨 **动态Logo**: 自定义SVG动画logo，具有流动光效和脉冲动画
- 📱 **响应式设计**: 完美适配桌面端、平板和移动设备
- 🚀 **快速加载**: 基于 VitePress 的静态站点生成
- 🎯 **现代化UI**: 简洁美观的用户界面设计
- 📖 **完整文档**: 涵盖产品功能、使用指南和API文档

## 🛠️ 技术栈

- [VitePress](https://vitepress.dev/) - 静态站点生成器
- [Vue 3](https://vuejs.org/) - 前端框架
- [TypeScript](https://www.typescriptlang.org/) - 类型安全
- [Vite](https://vitejs.dev/) - 构建工具

## 📦 安装

### 环境要求

- Node.js >= 16.0.0
- npm >= 7.0.0

### 本地开发

```bash
# 克隆项目
git clone https://github.com/LingJingAI-Labs/HuimengAI_doc.git
cd HuimengAI_doc

# 安装依赖
npm install

# 启动开发服务器
npm run docs:dev
```

开发服务器将在 `http://localhost:5173` 启动。

### 构建生产版本

```bash
# 构建静态文件
npm run docs:build

# 预览构建结果
npm run docs:preview
```

## 🚀 Linux 服务器部署

### 方式一：使用 Nginx（推荐）

#### 1. 服务器环境准备

```bash
# 更新系统包
sudo apt update && sudo apt upgrade -y

# 安装 Node.js 和 npm
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# 安装 Nginx
sudo apt install nginx -y

# 安装 Git
sudo apt install git -y
```

#### 2. 部署项目

```bash
# 克隆项目到服务器
cd /var/www
sudo git clone https://github.com/LingJingAI-Labs/HuimengAI_doc.git
cd HuimengAI_doc

# 安装依赖
sudo npm install

# 构建项目
sudo npm run docs:build
```

#### 3. 配置 Nginx

创建 Nginx 配置文件：

```bash
sudo nano /etc/nginx/sites-available/huimengai-doc
```

添加以下配置：

```nginx
server {
    listen 80;
    server_name your-domain.com;  # 替换为你的域名
    
    root /var/www/HuimengAI_doc/docs/.vitepress/dist;
    index index.html;
    
    # 启用 gzip 压缩
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # 静态资源缓存
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # 安全头
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
}
```

#### 4. 启用站点

```bash
# 创建软链接
sudo ln -s /etc/nginx/sites-available/huimengai-doc /etc/nginx/sites-enabled/

# 测试配置
sudo nginx -t

# 重启 Nginx
sudo systemctl restart nginx

# 设置开机自启
sudo systemctl enable nginx
```

### 方式二：使用 PM2 + Nginx

#### 1. 安装 PM2

```bash
sudo npm install -g pm2
```

#### 2. 创建 PM2 配置文件

```bash
# 在项目根目录创建 ecosystem.config.js
cat > ecosystem.config.js << EOF
module.exports = {
  apps: [{
    name: 'huimengai-doc',
    script: 'npm',
    args: 'run docs:preview',
    cwd: '/var/www/HuimengAI_doc',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 4173
    }
  }]
};
EOF
```

#### 3. 启动应用

```bash
# 启动应用
pm2 start ecosystem.config.js

# 保存 PM2 配置
pm2 save

# 设置开机自启
pm2 startup
```

### 方式三：使用 Docker

#### 1. 创建 Dockerfile

```dockerfile
# 在项目根目录创建 Dockerfile
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run docs:build

FROM nginx:alpine
COPY --from=builder /app/docs/.vitepress/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

#### 2. 创建 nginx.conf

```nginx
events {
    worker_connections 1024;
}

http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;
    
    sendfile        on;
    keepalive_timeout  65;
    
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
    
    server {
        listen       80;
        server_name  localhost;
        
        root   /usr/share/nginx/html;
        index  index.html index.htm;
        
        location / {
            try_files $uri $uri/ /index.html;
        }
        
        location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
            expires 1y;
            add_header Cache-Control "public, immutable";
        }
    }
}
```

#### 3. 构建和运行

```bash
# 构建镜像
docker build -t huimengai-doc .

# 运行容器
docker run -d -p 80:80 --name huimengai-doc-container huimengai-doc
```

## 🔄 自动化部署

### GitHub Actions 自动部署

创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to Server

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build
      run: npm run docs:build
    
    - name: Deploy to server
      uses: appleboy/ssh-action@v0.1.5
      with:
        host: ${{ secrets.HOST }}
        username: ${{ secrets.USERNAME }}
        key: ${{ secrets.KEY }}
        script: |
          cd /var/www/HuimengAI_doc
          git pull origin main
          npm ci
          npm run docs:build
          sudo systemctl reload nginx
```

## 📁 项目结构

```
HuimengAI_doc/
├── docs/                          # 文档源文件
│   ├── .vitepress/               # VitePress 配置
│   │   ├── components/           # Vue 组件
│   │   │   └── AnimatedLogo.vue  # 动态 Logo 组件
│   │   ├── theme/               # 主题配置
│   │   └── config.mts           # 站点配置
│   ├── features/                # 功能介绍页面
│   ├── guide/                   # 使用指南
│   ├── assets/                  # 静态资源
│   └── index.md                 # 首页
├── package.json                 # 项目配置
└── README.md                    # 项目说明
```

## 🎨 自定义配置

### 修改主题色彩

编辑 `docs/.vitepress/theme/index.ts` 文件来自定义主题。

### 添加新页面

1. 在 `docs/` 目录下创建新的 `.md` 文件
2. 在 `docs/.vitepress/config.mts` 中添加导航配置

### 自定义组件

在 `docs/.vitepress/components/` 目录下创建 Vue 组件，然后在主题中注册使用。

## 🔧 维护

### 更新依赖

```bash
# 检查过时的包
npm outdated

# 更新依赖
npm update
```

### 备份

```bash
# 备份重要文件
tar -czf huimengai-doc-backup-$(date +%Y%m%d).tar.gz /var/www/HuimengAI_doc
```

## 🐛 故障排除

### 常见问题

1. **构建失败**: 检查 Node.js 版本是否符合要求
2. **页面无法访问**: 检查 Nginx 配置和防火墙设置
3. **样式丢失**: 确保静态资源路径正确

### 日志查看

```bash
# Nginx 日志
sudo tail -f /var/log/nginx/error.log
sudo tail -f /var/log/nginx/access.log

# PM2 日志
pm2 logs huimengai-doc
```

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📞 联系我们

- 项目地址：[GitHub](https://github.com/LingJingAI-Labs/HuimengAI_doc)
- 官方网站：[HuimengAI](https://huimengai.com)