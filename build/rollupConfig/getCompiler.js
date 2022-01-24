/**
 * Rollup编译插件会根据源码类型动态切换, 该文件用来动态导出Rollup编译插件
 */
const babel = require('rollup-plugin-babel')
const typeScript = require('rollup-plugin-typescript2')
const { srcType } = require('../../jslib.config')

const jsCompiler = babel({
  // ...
})

const tsCompiler = typeScript({
  // 覆盖tsconfig.json的配置，rollup仅支持ES6模块
  tsconfigOverride: {
    compilerOptions : { module: 'ES6', target: 'ES5' }
  }
})

module.exports = () => srcType === 'js' ? jsCompiler : tsCompiler