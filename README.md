# blog_manager

个人博客管理后台

## 代码结构
```
├── docs                          # 构建后的文件,支持github部署
├── mock                          # 模拟数据
├── public                        # 全局静态资源
├── src
│    ├── assets                   # 静态文件文件夹
│    ├── common                   # 公共配置
│    ├── components
│    │      ├── ArticleManager    # 文章管理
│    │      ├── CommentManager    # 评论管理
│    │      ├── Dashboard         # 仪表盘
│    │      ├── FileManager       # 文件管理
│    │      ├── LableManager      # 标签管理
│    │      ├── Login             # 登录
│    │      ├── SysManager        # 系统管理
│    │      └── UserManager       # 用户管理
│    ├── layouts
│    │      ├── Default           # 通用布局
│    │      └── Login             # 登录页面布局
│    ├── services                 # 后台接口服务
│    ├── utils                    # 工具库
│    ├── App.css
│    ├── App.test.tsx
│    ├── App.tsx                  # 主组件
│    ├── index.css
│    ├── index.tsx                # 应用入口
│    ├── logo.svg
│    ├── serviceWorker.ts
│    └── setupProxy.ts            # 反向代理插件配置
└── config-overrides.js           # 通过react-app-rewired实现覆盖默认配置
```

该项目使用[Create React App](https://github.com/facebook/create-react-app)启动。

## 创建步骤
### 使用typescript做为模板创建应用
```
npx create-react-app blog_manager --template typescript
```

### 引入antd
```
npm i antd
```

### 使用react-app-rewired进行webpack相关配置
```
npm i react-app-rewired customize-cra
```
### 使用babel-plugin-import实现按需加载
```
npm i babel-plugin-import
```
js 代码部分不使用这个插件也会有按需加载的效果。

## 可用脚本

在项目目录中，可以运行：

---

### `npm run start:dev`

在开发模式下运行应用程序（使用开发环境配置）。<br />
打开[http：// localhost：3000](http：// localhost：3000)在浏览器中查看。

如果进行编辑，页面将重新加载。<br />
可以在控制台中看到所有lint错误。

---

### `npm run start:pro`

在开发模式下运行应用程序（使用生产环境配置）。<br />
打开[http：// localhost：3000](http：// localhost：3000)在浏览器中查看。

如果进行编辑，页面将重新加载。<br />
可以在控制台中看到所有lint错误。

---

### `npm test`

在交互式监视模式下启动测试运行程序。<br />
有关更多信息，请参见关于[running tests](https://facebook.github.io/create-react-app/docs/running-tests)的部分。

---

### `npm run build:dev`

用开发环境配置将要部署到生产环境的应用程序生成到“build”文件夹。通常用于开发环境部署测试。

---

### `npm run build:pro`

用生产环境配置将要部署到生产环境的应用程序生成到“build”文件夹。通常用于生产环境部署。<br />
在生产模式下正确捆绑了React，并优化了构建以获得最佳性能。

构建会对文件进行压缩和哈希混淆。<br />

有关更多信息，请参见关于[deployment](https://facebook.github.io/create-react-app/docs/deployment)的部分。

---

### `npm run eject`

**注意：这是单向操作。 一旦进行 `eject`, 将不能回退!**

如果您对构建工具和配置选择不满意，则可以随时`eject`。 此命令将从项目中删除单个构建依赖项。

而是将所有配置文件和传递依赖项（Webpack，Babel，ESLint等）直接复制到您的项目中，以便您完全控制它们。除了`eject`以外的所有命令仍然可以使用，但是它们将指向复制的脚本，因此您可以对其进行调整。 至此，您可以对项目进行自主控制。

并不是任何情况下都需要使用`eject`。

---

## Learn More

您可以在[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)中了解更多信息。

要学习React，请查看[React documentation](https://reactjs.org/)。
