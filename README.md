[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

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
* [ ] React
  * [x] Redux
  * [ ] react-router
  * [ ] reselect
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

