# React-scaffold-tool

[简体中文](https://github.com/DangoSky/react-scaffold-tool/blob/master/README.md) | English

## Description

A scaffold for React front-end project development, which can quickly build a React project shelf.

## Use

After the Node development environment has been installed on the computer, install react-scaffold-tool globally：

```js
npm install -g react-scaffold-tool
```

Create a new project with react-scaffold-tool：

```js
cli init <project name>
cd <project name>
npm install
```

Directory structure of project templates：

```js
├── README.md
├── package.json
├── tsconfig.json
├── images.d.ts // declare various image files
├── img // store image resources
├── .gitignore
├── .npmrc // by default, the official npm source is specified
├── .babelrc
├── webpack
│   ├── webpack.common.js // common webpack configuration for dev and prod
│   ├── webpack.dev.js // dev's webpack configuration
└── src
    ├── App.tsx // root component
    ├── index.tsx // project entry file
    ├── style.less // root component style
    ├── index.html // HTML template when packaging
    ├── api 
    │   ├── index.ts  // the get and post methods are encapsulated
    │   ├── modules // then according to the division of project modules, add interfaces here
    ├── pages // divide project business components according to pages
```

## Configured function

- [x] React related dependencies, including React-Router
- [x] TypeScript compilation
- [x] Less compilation
- [x] Babel compilation
- [x] Antd UI library
- [x] Network template packaging
- [x] Hot reload
- [ ] Eslint
- [ ] Packaging optimization
- [ ] Build optimization


## Update log

- 16/10/2020：Increase the Webpack production environment configuration, cancel SourceMap to reduce the size of the package; use vender to separate out the unchanged modules such as React.
- 17/09/2020：Add the network request template, separate the development and online branches of the project template.
- 14/09/2020：Initially complete react-scaffold-tool and release the npm package.
- 11/09/2020：Start to build react-scaffold-tool scaffold.
- 08/09/2020：Complete the basic configuration of the project template, including various configurations such as react, ts, less, babel, antd and hot reload.
- 29/08/2020：Start using webpack to configure a new project from scratch.


## FAQ

1. Q：Why not use official scaffolding such as create-react-app directly？

A：There are three reasons. One is that create-react-app has many limitations. The new project template it creates does not open `webpack.config.js` and other configuration files. It needs to be obtained by `npm run eject`, and the operation is irreversible. Then, create-react-app does not have loader such as less and ts configured by default. Almost all front-end projects now use ts and less/sass. It is troublesome to manually configure ts-loader and less-loader after each new project. The third is that although the tool is good, it can't just stay at the level of being able to use it. You need to figure out what is done inside the tool and how to do it, so there is an opportunity to configure a scaffold by yourself.
