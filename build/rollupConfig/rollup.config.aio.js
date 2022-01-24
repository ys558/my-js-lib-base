const babel = require('rollup-plugin-babel')
const nodeResolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const { srcType } =  require('../../jslib.config')
const getCompiler = require('./getCompiler')

export default {
  input: `src/index.${srcType}`, // 入口文件，区分js|ts
  output: {
    file: 'dist/index.aio.js', // 构建文件
    format: 'umd', // 输出格式，umd格式支持浏览器直接引入、AMD、CMD、Node
    name: 'hongqi-activity-manager', // umd模块名，在浏览器环境用作全局变量名
    banner: '/*  */' // 插入打包后文件的头部内容
  },
  plugins: [
    // Rollup解析外部依赖模块插件
    nodeResolve(),
    // Rollup仅支持ES6模块，此插件是将外部依赖CommonJS模块转换为ES6模块的插件
    commonjs({
      include: 'node_modules/**',
    }),
    babel({
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              browsers: 'last 2 versions, > 1%, ie >= 6, Android >= 4, iOS >= 6, and_uc > 9',
              node: '0.10'
            },
            // 是否将ES6模块转为CommonJS模块，必须为false
            // 否则 Babel 会在 Rollup 有机会做处理之前，将我们的模块转成 CommonJS，导致 Rollup 的一些处理失败
            // 例如rollup-plugin-commonjs插件，将 CommonJS 转换成 ES6 模块
            modules: false,
            // 松散模式，源码不同时使用export和export default时可开启，更好兼容ie8以下
            loose: false,
            // 按需进行polyfill
            useBuiltIns: 'usage'
          }
        ]
      ],
      plugins: ['@babel/plugin-transform-runtime'],
      runtimeHelpers: true,
      exclude: 'node_modules/**'
    }),
    getCompiler(),
  ]
}