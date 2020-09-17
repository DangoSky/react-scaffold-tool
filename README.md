# React-scaffold-tool

[English](https://github.com/DangoSky/react-scaffold-tool/blob/master/README_en.md) | 简体中文

## 描述

一款用于 React 前端项目开发的脚手架，可以快速搭建起一个 React 项目架子。

## 使用

在计算机上已经装好 Node 开发环境后，全局安装 react-scaffold-tool：

```js
npm install -g react-scaffold-tool
```

使用 react-scaffold-tool 创建一个新项目：

```js
cli init <项目名称>
cd <项目名称>
npm install
```

项目模板的目录结构：

```js
├── README.md
├── package.json
├── tsconfig.json
├── images.d.ts // 声明各类图片文件
├── img // 存放图片资源
├── .gitignore
├── .npmrc // 默认指定使用官方的 npm 源
├── .babelrc
├── webpack
│   ├── webpack.common.js // dev 和 prod 的公共 webpack 配置
│   ├── webpack.dev.js // dev 的 webpack 配置
└── src
    ├── App.tsx // 根组件
    ├── index.tsx // 项目入口文件
    ├── style.less // 根组件样式
    ├── index.html // 打包时的 HTML 模板
    ├── api 
    │   ├── index.ts  // 封装了 get 和 post 方法
    │   ├── modules // 后续根据项目模块的划分，在这里添加接口
    ├── pages // 项目业务组件
```

## 配置的功能

- [x] React 相关依赖，包括 React-Router
- [x] TypeScript 编译
- [x] Less 编译
- [x] Babel 编译
- [x] Antd UI 库
- [x] 网络模板封装
- [x] 热重载
- [ ] Eslint
- [ ] 打包优化
- [ ] 构建优化


## 更新日志

- 2020/09/17：增加网络请求模板，并且分离出项目模板的开发分支和线上分支。
- 2020/09/14：初步完成 react-scaffold-tool 并发布 npm 包。
- 2020/09/11：开始搭建 react-scaffold-tool 脚手架。
- 2020/09/08：完成项目模板的基本配置，包括 react、ts、less、babel、antd 和热重载等各项配置。
- 2020/08/29：开始使用 webpack 从零配置一个新项目。


## FAQ

1. Q：为什么不直接使用 create-react-app 等官方脚手架？

A：三点原因，一是 create-react-app 存在诸多限制，它创建出来的新项目模板没有开放 `webpack.config.js` 等配置文件，需要 `npm run eject` 去获取，而且该操作不可逆。二是 create-react-app 没有默认配置好 less 和 ts 等 loader，现在的前端项目几乎都采用了 ts 和 less/sass，每次新建项目后都得再手动配置 ts-loader 和 less-loader 很麻烦。三是工具虽好，但不能仅仅停留在会用的程度，需要自己弄清楚工具内部做了什么、是怎么做的，于是乎就有了这么一个契机去自己配置一个脚手架出来了。
