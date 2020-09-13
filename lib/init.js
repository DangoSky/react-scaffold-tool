const ora = require('ora');
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const download = require('./download.js');
const spinner = ora();

module.exports = function(directoryPath, projectName) {
  if (!projectName) {
    console.log(chalk.bold.red('Error! You must enter a new project name.'));
    return;
  }

  const targetPath = path.join(directoryPath, projectName);
  
  if (fs.existsSync(targetPath)) {
    console.log(chalk.bold.red(`Error! The ${projectName} folder already exists at ${directoryPath}.`));
    return;
  }

  spinner.start(`Start downloading templates for ${projectName}.`);

  download(directoryPath, projectName)
    .then(() => {
      spinner.succeed(`Success! Created ${projectName} at ${directoryPath}.`);
    })
    .catch(err => {
      spinner.fail(`Project template download failed.`);
      console.log(chalk.red(err));
    })
}
