#!/usr/bin/env node

// 如想添加新任务，只需创建command-${任务名称}文件夹，在文件夹下的index.js中编写代码，然后在package.json添加对应的script命令即可。
const semver = require('semver')
const requiredVersion = '>=8'
// check node version
if (!semver.satisfies(process.version, requiredVersion)) {
  console.error(
    `You are using Node ${process.version}, but @logan/jslib-base ` +
    `requires Node ${requiredVersion}.\nPlease upgrade your Node version.`
  )
  process.exit(1)
}

const args = require('minimist')(process.argv.slice(2))

const command = args._[0]
// delete command from args._
args._.shift()

function run(command, args) {
  const runner = require(`./command-${command}/index`)
  runner(args)
}

run(command, args)

