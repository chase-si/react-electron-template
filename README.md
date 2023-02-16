## 简介
electron + react的基础模版, react基于create-react-app创建, 保留集成以下主要功能库(完整的可查看package.json):
|库名称 | 说明 |
|------|-----|
|antd  | UI/基础组件库|
|axios | http请求 |
|redux | 全局状态管理store |
|react-router-dom | 路由 |
|styled-components | css in js写法组件 |
|reconnecting-websocket | websocket库, 自我封装了重连, 心跳|
|moment| 时间转化 |
|i18n  | 多语言(待添加) |
|http-proxy-middleware | 本地转发, 解决跨域 |
|less | 覆写antd样式用 |
|eslint| 代码规范 |


## 安装
初始化使用node版本为18.14.0, `yarn install`即可.
## 开发环境启动
`yarn start`, 成功的话自动会跳出electron弹窗, 显示login页面, login页面随便输入账号密码可跳转首页.
## 打包
```
// 目前编译前端包过大, 需要先设置一下node最大内存限制
export NODE_OPTIONS=--max_old_space_size=4096

// 打包出react的包
yarn build-react

// 打包出electron免安装版的包
yarn build-electron

// 打包出安装包(新环境未尝试)
yarn pack-electron
```

## 项目结构简介
```
    ├── components  // 全局共享组件
    │   ├── loading  
    │   ├── table // 
    │   ├── ...
    ├── pages    // 基础页面
    │   ├── home
    │   ├── login
    │   │   ├── index.js // 入口文件
    │   │   ├── style.js // (不一定, 存放样式文件)
    │   │   ├── components文件夹 // (不一定, 如果当前页面复杂, 可抽局部组件到此下面)
    │   │   └── constants.js // (不一定, 存放当前页面常量, function之类) 
    │   └── ...
    ├── redux   // redux相关
    │   ├── actions   // redux 触发方法
    │   ├── constants // redux 全局唯一dispatch type变量
    │   ├── reducers  // redux 存放和操作各个state
    │   └── store     // redux 组装config
    ├── routers  // 路由信息
    ├── hooks  // 自己封装的hooks, 多处调用且请求前后有复杂逻辑处理的可考虑提取放在此处
    ├── static   // 静态文件, 主要放图片
    │   └── img
    │       ├── home
    │       └── navbarIcon
    ├── style   // 全局样式文件存放
    └── utils   // 可以提出的工具类方法, http 和 socket请求也放在下面
```
