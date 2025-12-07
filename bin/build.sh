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
image_latest="registry.cn-hangzhou.aliyuncs.com/$namespace/$name:$branch-$env-latest"

echo "打镜像中..."
echo "镜像: $image"
echo "Dockerfile: ./bin/$env/Dockerfile "

# 根据系统类型选择构建方式
if [[ "$OSTYPE" == "darwin"* ]] && docker buildx version >/dev/null 2>&1; then
    # macOS系统且支持buildx则使用多平台构建
    echo "检测到macOS系统，尝试多平台构建..."
    # 检查当前 builder 是否支持多平台
    if ! docker buildx inspect | grep -q "linux/amd64"; then
        echo "当前 builder 不支持多平台，尝试创建新的 builder..."
        docker buildx create --use --name mybuilder --driver docker-container || true
        docker buildx inspect --bootstrap
    fi
    docker buildx build --platform linux/amd64 -t $image -f ./bin/$env/Dockerfile . --push
else
    # Windows系统或其他情况使用单平台构建
    echo "使用单平台构建..."
    docker build -t $image -f ./bin/$env/Dockerfile .
    docker push $image
fi

docker tag $image $image_latest
docker push $image_latest