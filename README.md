[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/c7a9860c177c44a7b21368e94b88188b)](https://www.codacy.com/app/gogoge/react_bolierplate2018?utm_source=github.com&utm_medium=referral&utm_content=gogoge/react_bolierplate2018&utm_campaign=Badge_Grade)

# Roadmap

* [x] Coding Style
  * [x] eslint
  * [x] prettier
  * [x] editorconfg
* [x] Filter unnessary file from git: .gitigonre
* [x] dev server
  * [x] Koa
  * [x] ~~HTTPS / HTTP2~~ `TBD if SSR`
  * [x] HMR
  * [ ] React Hot Loader 4
* [x] CSS Preprocessor, and scope localize
  * [x] PostCSS,
  * [x] React CSS Module
  * [x] CSS import
  * [x] CSS simple var
  * [x] NextCSS
  * [ ] CSS mixin
* [x] Webpack config separation: common, dev, prod merge by webpack-merge
* [x] Separate CSS file from bundle.js
  * [x] ExtractTextPlugin
* [x] Mapping bundle.js pc to Source map
* [x] Babel 7
  * [x] decorator symbol
  * [x] babel-plugin-transform-class-properties: writing react compnent using es6 class
  * [x] auto add polyfill: preset-env
* [x] Production mode
  * [x] production environment
  * [x] webpack ugilify plugin
* [x] Compress asset to gzip
  * [x] compression-webpack-plugin
* [x] React
* [x] Redux
* [x] [Redux devTool](https://github.com/gaearon/redux-devtools/blob/master/docs/Walkthrough.md)
* [x] [react-router](https://reacttraining.com/react-router/web/example/no-match)
* [x] [reselect](https://github.com/reactjs/reselect)
* [x] immutable.js
* [ ] Redux-saga
* [ ] Code-splitting

---

# NPM Script

Start dev server

```
yarn dev
```

Build production bundle js and css and index.html

```
yarn build
```

# Shortcut of Redux devtool

`Ctrl+H` Toggle the visibility
`Ctrl+Q` Change the position
