const path = require('path')
const rollup = require('rollup')

// configure file for different output type
const rollupConfigMap = {
  // UMD
  aio: 'rollup.config.aio.js',
  // UMD, uglified
  aioMin: 'rollup.config.aio.min.js',
  // ES6 Modules
  esm: 'rollup.config.esm.js',
  // CommonJS
  cjs: 'rollup.config.js'
}

// single rollup task
const runRollup = (configFile) => {
  return new Promise(async (resolve, reject) => {
    // 根据配置文件名引入rollup配置
    const options = require(path.resolve(__dirname, '../rollupConfig', configFile))
    // 创建rollup任务
    const bundle = await rollup.rollup(options.inputOption)
    // 构建文件
    await bundle.write(options.outputOption)
    console.log(`${options.outputOption.file} 构建成功`)
    resolve()
  })
}


module.exports = async (args = {}) => {
  // 要构建的格式数组
  const moduleTypes = args._

  // 目的在于支持选择要构建的类型
  // 例如 node build/index.js build esm cjs 则只构建es6模块格式和commonjs格式文件
  // 不传则全部构建
  const configFiles = moduleTypes && moduleTypes.length
    ? moduleTypes.map(moduleKey => rollupConfigMap[moduleKey])
    : Object.values(rollupConfigMap)

  try {
    // 并行构建（伪，JS单线程）
    await Promise.all(configFiles.map(file => runRollup(file)))
  } catch (e) {
    throw new Error(e)
  }
}