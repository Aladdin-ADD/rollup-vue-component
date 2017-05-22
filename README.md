Simple example(WIP)
===

Example bundling an UMD package with one `vue` file and exporting stylus and CSS (both minified and unminified) to different files.

## linking 
+ [rollup](https://rollupjs.org/)
+ [tree-shaking](https://medium.com/@Rich_Harris/tree-shaking-versus-dead-code-elimination-d3765df85c80)
+ [为什么要使用ES6 module](https://github.com/rollup/rollup/wiki/ES6-modules)
+ [同中有异的 Webpack 与 Rollup](https://juejin.im/post/58edb865570c350057f199a7)
+ [rollup-plugin-vue](https://github.com/vuejs/rollup-plugin-vue)


## features:
+ tree-shaking
+ 集成了 cz-cli
+ 支持导出 umd, es 格式
+ 支持 styl, sass, scss

## Building

### With build script

```bash
node build.js
ls dist
```

### development

```bash
npm run dev
```

### With rollup cli

```bash
npm i -g rollup
rollup -c --input Hello.vue --output dist/bundle.js
```
