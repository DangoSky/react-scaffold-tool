#! /usr/bin/env node
const program = require('commander')

console.log(11);

program.parse(process.argv);

const projectName = program.args[0];

console.log(program.args);
console.log(projectName);

if (!projectName) {
  // 相当于执行命令的--help选项，显示help信息，这是commander内置的一个命令选项
  program.help() 
  return
}
