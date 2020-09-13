const download = require('download-git-repo');
const path = require('path');

// Clone templates from github
module.exports = function (projectName) {
  // The download is under the current directory of the run command
  const targetPath = path.join(process.cwd(), projectName);
  return new Promise((resolve, reject) => {
    download(
      'https://github.com:DangoSky/react-scaffold-template#master',
      targetPath,
      { clone: true },
      (err) => {
        if (err) {
          reject(err)
        } else {
          resolve(targetPath)
        }
      }
    )
  })
}
