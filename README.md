Simple example(WIP)
===

Example bundling an UMD package with one `vue` file and exporting stylus and CSS (both minified and unminified) to different files.

## linking 
+ [rollup](https://rollupjs.org/)
+ [同中有异的 Webpack 与 Rollup](https://juejin.im/post/58edb865570c350057f199a7)
+ [rollup-plugin-vue](https://github.com/vuejs/rollup-plugin-vue)


## features:
+ out-of-box
+ 支持导出 cjs, umd, es 格式
+ 支持 styl, sass, scss

## Building

### With build script

```
node build.js
ls dist
```

### With rollup cli

```
npm i -g rollup
rollup -c --input Hello.vue --output dist/bundle.js
```
