# 使用官方 Nginx 镜像作为基础镜像
FROM nginx:1.24.0-alpine

WORKDIR /

# 复制构建好的前端文件到 Nginx 默认的网页根目录
COPY docs/.vitepress/dist /usr/share/nginx/html

# 复制 Nginx 配置文件（可选）
COPY ./bin/nginx.conf /etc/nginx/conf.d/default.conf

# 暴露 Nginx 默认端口
EXPOSE 80


