#!/bin/bash

# 获取当前分支名
current_branch=$(git rev-parse --abbrev-ref HEAD)

# 检查是否在 test、master 或 main 分支
if [ "$current_branch" = "test" ] || [ "$current_branch" = "master" ] || [ "$current_branch" = "main" ]; then
    echo "当前在 $current_branch 分支，准备上传 dist 文件"

    # 构建项目
    npm run docs:build

    # 强制添加 dist 目录
    git add docs/.vitepress/dist -f

    # 提交更改
    git commit -m "chore: 上传 dist 文件 [skip ci]"

    # 推送到远程仓库
    git push origin $current_branch
else
    echo "当前在 $current_branch 分支，不上传 dist 文件"
    # 根据当前分支推送到对应的远程分支
    if git remote | grep -q "aliyun"; then
        git push aliyun HEAD:master
    else
        git push origin $current_branch
    fi
fi