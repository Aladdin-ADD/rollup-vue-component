Simple example(WIP)
===

Example bundling an UMD package with one `vue` file and exporting stylus and CSS (both minified and unminified) to different files.

# features:
+ out-of-box
+ 支持导出 cjs, umd, es 格式
+ 支持 styl, sass, scss

## Building

### With build script

```
cd example
node build.js
ls dist
```

### With rollup cli

```
cd example
npm i -g rollup
rollup -c --input Hello.vue --output dist/bundle.js
```
