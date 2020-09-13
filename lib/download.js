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
    fs.writeFileSync(file, result)
  }
}

// Clone templates from github
module.exports = function (projectName) {
  // The download is under the current directory of the run command
  const targetPath = path.join(process.cwd(), projectName);

  // TODO: 判断是否存在同名文件夹

  return new Promise((resolve, reject) => {
    download(
      'https://github.com:DangoSky/react-scaffold-template#master',
      targetPath,
      { clone: true },
      (err) => {
        if (err) {
          reject(err)
        } else {
          replaceFileContent(targetPath, 'package.json', {
            projectName
          });
          resolve(targetPath)
        }
      }
    )
  })
}
