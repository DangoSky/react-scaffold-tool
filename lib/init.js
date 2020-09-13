const ora = require('ora');
const chalk = require('chalk');
const download = require('./download.js');
const spinner = ora();

module.exports = function(projectName) {
  if (!projectName) {
    console.log(chalk.bold.red('Error! You must enter a new project name.'));
    return;
  }

  spinner.start(`Start downloading templates for ${projectName}.`);

  download(projectName)
    .then(targetPath => {
      spinner.succeed(`Success! Created ${projectName} at ${targetPath}.`);
    })
    .catch(err => {
      spinner.fail(`Project template download failed.`);
      console.log(chalk.red(err));
    })
}
