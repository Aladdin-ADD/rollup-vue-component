# Simple example(WIP)

> As vue-loader is for webpack and vueify is for browserify, similarly its for rollup. As we know, webpack and browserify concat stuff and make it runnable in browser. Its difficult to share .vue components. Now roll your Vue components.
With rollup you can break your application into reusable modules.

## linking 
+ [rollup](https://rollupjs.org/)
+ [buble](https://buble.surge.sh/guide/)
+ [tree-shaking](https://medium.com/@Rich_Harris/tree-shaking-versus-dead-code-elimination-d3765df85c80)
+ [为什么要使用ES6 module](https://github.com/rollup/rollup/wiki/ES6-modules)
+ [同中有异的 Webpack 与 Rollup](https://juejin.im/post/58edb865570c350057f199a7)
+ [rollup-plugin-vue](https://github.com/vuejs/rollup-plugin-vue)


## features:
+ tree-shaking
+ 支持导出 umd, es 格式（默认 es module）
+ 支持 sass, less & stylus
+ 支持 pug
+ 集成了 cz-cli (自动生成changelog, wip)

## Building

### With build script

```bash
node build.js
```

### With rollup cli

```bash
npm i -g rollup
rollup -c --input Hello.vue --output dist/bundle.js
```

### development

```bash
npm run dev
```
