module.exports = {
    // source code type, 'js' or 'ts'. 源码类型
    srcType: 'ts',
    // name for UMD export. e.g., 'myLib' or 'lib.util'. UMD模式出口名，浏览器下为全局变量名
    globalName: 'umdName',
    // Code to insert at top of bundle (outside wrapper). 打包文件头部内容
    banner: `/*!
    * Generated by myJSLibHelloWorld. (https://github.com/ys558/my-js-lib-base.git)
    * Copyright 2022-${(new Date).getFullYear()} ys558 All Rights Reserved
    * Licensed under MIT (https://github.com/ys558/my-js-lib-base.git/blob/master/LICENSE)
    */`,
    // Code to insert at end of bundle (outside wrapper). 打包文件尾部内容
    footer: '/* Generated by myJSLibHelloWorld. https://github.com/ys558/my-js-lib-base.git */',
    // output files of different module specification. 各模块规范的输出文件
    output: {
      // UMD
      aio: 'dist/index.aio.js',
      // UMD and uglified
      aioMin: 'dist/index.aio.min.js',
      // ES6 Modules
      esm: 'dist/index.esm.js',
      // Common JS
      cjs: 'dist/index.js',
    },
    // Should documents be auto-generated, true or false. 是否自动生成API文档
    requireDocs: false,
    // disable ESLint/TSLint or not, true or false. 禁用代码风格检查
    disableLint: false,
    // if true, will block build if any lint error or warnings were found . 代码风格检查出错时终止构建（build）
    blockBuildOnLintFailures: true,
  }