# blog_manager

个人博客管理后台

# 代码结构

```
├── config                   # umi 配置，包含路由，构建等配置
├── mock                     # 本地模拟数据
├── public
│   └── favicon.png          # Favicon
├── src
│   ├── assets               # 本地静态资源
│   ├── components           # 业务通用组件
│   ├── e2e                  # 集成测试用例
│   ├── layouts              # 通用布局
│   ├── models               # 全局 dva model
│   ├── pages                # 业务页面入口和常用模板
│   ├── services             # 后台接口服务
│   ├── utils                # 工具库
│   ├── locales              # 国际化资源
│   ├── global.less          # 全局样式
│   └── global.ts            # 全局 JS
├── tests                    # 测试工具
├── README.md
└── package.json
```

# 相关技术

该项目使用[Ant Design Pro](https://pro.ant.design)初始化。

## 提供的脚本

Ant Design Pro 提供了一些有用的脚本，可帮助您快速启动和构建 Web 项目，代码样式检查和测试。

package.json 中提供的脚本。

### 启动项目

```bash
npm start
```

### 构建项目

```bash
npm run build
```

### 检查代码样式

```bash
npm run lint
```

您还可以使用脚本自动修复某些 lint 错误：

```bash
npm run lint:fix
```

### 测试代码

```bash
npm test
```

## 更多

可以在[Ant Design Pro 官方网站](https://pro.ant.design)上查看完整文档。
