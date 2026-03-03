# 硬核笔迹

免费无广告实用软件下载站

## 🚀 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建
npm run build
```

## 📁 项目结构

```
.
├── docs/                   # 文档目录
│   ├── .vitepress/        # VitePress 配置
│   │   ├── theme/         # 自定义主题
│   │   └── config.js      # 站点配置
│   ├── index.md           # 首页
│   ├── about.md           # 关于页面
│   ├── category/          # 分类页面
│   ├── software/          # 软件详情页
│   └── public/            # 静态资源
├── package.json
└── README.md
```

## 📝 添加新软件

1. 在 `docs/software/` 目录创建新的 `.md` 文件
2. 参考 `tvbox.md` 格式编写内容
3. 在 `docs/category/all.md` 中添加软件信息

## 🌐 部署

项目配置为自动部署到 GitHub Pages，每次 push 到 main 分支会自动触发部署。

## 📄 许可证

MIT
