const program = require('commander')
const package = require('../package.json');

program
  .version(package.version)
  .option('-a, --aaa', 'aaaaa')
  .command('init', 'create a new project')
  .parse(process.argv)

console.log(2);
if (program.aaa) {
  console.log('aaa');
}