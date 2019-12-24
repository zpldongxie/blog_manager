# blog_manager

个人博客管理后台

# 代码结构

```
├── public                                      # 静态资源
│
├── src
│   │
│   ├── cat                                     # cat模块
│   │
│   ├── common                                  # 公共代码
│   │     │
│   │     ├── interceptor                       # 全局拦截器
│   │     │       │
│   │     │       ├── errors.interceptor.ts     # 异常拦截器
│   │     │       │
│   │     │       ├── logging.interceptor.ts    # 日志拦截器
│   │     │       │
│   │     │       ├── timeout.interceptor.ts    # 访问超时拦截器
│   │     │       │
│   │     │       └── transform.interceptor.ts  # 数据封闭拦截器
│   │     │
│   │     ├── middleware                        # 中间件
│   │     │       │
│   │     │       └── logger.middleware.ts      # 日志
│   │     │
│   │     ├── roles.decorator.ts                # 用户验证装饰器
│   │     │
│   │     └── roles.guard.ts                    # 认证保护
│   │
│   ├── app.controller.ts                       # 主路由
│   │
│   ├── app.module.ts                           # 主模块控制
│   │
│   ├── app.service.ts                          # 主服务
│   │
│   └── main.ts                                 # 应用主入口
│
├── views                                       # 页面模板
│   │
│   ├── layouts                                 # 通用布局
│   │
│   └── index.hbs                               # 主页
│
├── README.md
│
└── package.json
```

# nest 框架基本使用说明
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>  

```
nest new blog_manager           # 创建项目
nest g controller cats          # 新建控制器
nest g service cats             # 创建对应的服务
nest g module cats              # 封闭一个module，在根module中导入
```
应该使用interface来维护对象，使用dto来约束传递的参数。

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

  Nest is [MIT licensed](LICENSE).
