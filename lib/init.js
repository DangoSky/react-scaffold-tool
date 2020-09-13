const download = require('./download.js');
const consoles = require('../util/console');

module.exports = function(projectName) {
  if (!projectName) {
    consoles('red', 'Error! You must enter a new project name.');
    return;
  }

  console.log(`Start downloading templates for ${projectName}.`);

  download(projectName)
    .then(targetPath => {
      consoles('green', `Success! Created ${projectName} at ${targetPath}`);
    })
    .catch(err => {
      consoles('red', err);
    })
}
