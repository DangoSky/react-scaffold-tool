const download = require('download-git-repo');
const handlebars = require('handlebars');
const path = require('path');
const fs = require('fs');

// Modify some data in the template files such as package.json
function replaceFileContent(targetPath, fileName, data) {
  const file = `${targetPath}/${fileName}`;
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file).toString();
    const result = handlebars.compile(content)(data);
    fs.writeFileSync(file, result);
  }
}

// Clone templates from github
module.exports = function (directoryPath, projectName) {
  const targetPath = path.join(directoryPath, projectName);

  return new Promise((resolve, reject) => {
    download(
      'https://github.com:DangoSky/react-scaffold-template#master',
      targetPath,
      { clone: true },
      (err) => {
        if (err) {
          reject(err);
        } else {
          replaceFileContent(targetPath, 'package.json', {
            projectName
          });
          resolve();
        }
      }
    )
  })
}
