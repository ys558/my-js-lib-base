const { spawnSync } = require('child_process')

module.exports = (args = {}) => {
  return new Promise(resolve => {
    // 指定jest配置文件
    const cliOptions = ['--config', 'build/command-test/jest.config.js']
    // 是否收集测试覆盖率信息
    if (args.coverage) {
      cliOptions.push('--collectCoverage')
    }
    spawnSync('jest', cliOptions, {
      stdio: 'inherit'
    })
    resolve()
  })
}