#!/usr/bin/env bash

set -e
# bash ./bin/build.sh test pre
branch=$1
env=$2
name="huimengai_doc"
# lingjingai
namespace="lingjingai_wdh"

echo "当前分支: $branch"
echo "当前环境: $env"

if [ ! -f "package.json" ];then
  echo "请在项目根目录运行 bash ./bin/build.sh"
  exit 1
fi

# 拉取指定分支的代码
git fetch origin $branch
git checkout $branch
git pull origin $branch

git_hash=`git rev-parse --short $branch`

image="registry.cn-hangzhou.aliyuncs.com/$namespace/$name:$branch-$env-$git_hash"
image_latest="registry.cn-hangzhou.aliyuncs.com/$namespace/$name:$env-latest"

echo "打镜像中..."
echo "镜像: $image"
echo "Dockerfile: ./bin/$env/Dockerfile "

# 根据系统类型选择构建方式
if [[ "$OSTYPE" == "darwin"* ]] && docker buildx version >/dev/null 2>&1; then
    # macOS系统且支持buildx则使用多平台构建
    echo "检测到macOS系统，尝试多平台构建..."
    docker buildx build --platform linux/amd64,linux/arm64 -t $image -f ./bin/$env/Dockerfile .
else
    # Windows系统或其他情况使用单平台构建
    echo "使用单平台构建..."
    docker build -t $image -f ./bin/$env/Dockerfile .
fi

docker tag $image $image_latest
echo "打镜像完成..."
docker push $image
docker push $image_latest
echo "推镜像完成..."