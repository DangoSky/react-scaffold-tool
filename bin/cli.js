#!/usr/bin/env node

const program = require('commander');
const package = require('../package.json');
const initProject  = require('../lib/init.js');

program
  .version(package.version, '-v, --version', 'output the current version')
  .description('Welcome to use react-scaffold built by DangoSky~')

program
  .command('init')
  .action((cmd) => {
    const projectName = cmd.args[0];
    initProject(projectName);
  })

program.parse(process.argv);
