@echo off
echo 正在构建并部署到 gh-pages 分支...
cd /d c:\Users\laosa\Desktop\software-site

:: 安装依赖
npm install

:: 构建
npm run build

:: 进入构建目录
cd docs\.vitepress\dist

:: 初始化 git
git init
git add .
git commit -m "deploy"

:: 推送到 gh-pages 分支
git push -f https://github.com/laosan-x/software-site.git master:gh-pages

echo 部署完成！
pause
