## 前言
```
vue + vue-router + webpack + sass 服务端渲染项目基本配置
```

## 源码说明
### 项目目录说明
```
.
|-- build                            // Webpack 程序打包配置
|   |-- dev-server.js                  // 开发 node 服务器配置
|   |-- vue-loader.config.js           // Vue-loader 配置
|   |-- webpack.base.config.js         // Webpack 基本配置
|   |-- webpack.client.config.js       // Webpack 客户端配置
|   |-- webpack.server.config.js       // Webpack 服务器端配置
|-- dist                             // 编译后文件目录
|-- src                              // 源码目录
|   |-- assets                       // 各种资源文件
|       |-- stylesheets              // 样式表文件夹
|           |-- app.scss             // Scss 样式入口文件
|       |-- images                   // 静态图片文件夹
|       |-- fonts                    // 字体文件夹
|   |-- components                   // 公共组件
|       |-- header.vue               // 页面头部公共组件
|   |-- config                       // 程序的基本信息配置
|   |-- pages                        // 页面组件
|   |-- router                       // 路由配置
|       |-- index.js                 // 配置页面路由
|   |-- store                        // Vuex 的状态管理
|       |-- modules                  // Vuex 按页面模块分割
|       |-- index.js                 // Store 基本配置
|       |-- actions.js               // 根级别 actions
|       |-- geters.js                // getters 配置用户
|       |-- mutation-types.js        // 使用常量替代 Mutation 事件类型 
|   |-- app.vue                      // 页面入口文件
|   |-- app.js                       // 程序入口文件，加载各种公共组件
|   |-- client-entry.js              // 浏览器端入口文件
|   |-- server-entry.js              // 服务器端入口文件
|   |-- index.template.html          // 首页 html 模板文件
|-- server.js                        // Node 服务器配置
|-- index.html                       // 程序入口 html 文件
|-- README.md                        // 项目说明
|-- package.json                     // 配置项目相关信息，通过执行 npm init 命令创建
.
```


### 运行程序 
```
npm install
npm run dev
http://localhost:3000
```
