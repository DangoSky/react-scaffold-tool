const download = require('download-git-repo');
const path = require('path');

module.exports = function (projectName) {
  const targetPath = path.join(process.cwd(), projectName);
  console.log(1111);
  console.log(targetPath);
  return new Promise((resolve, reject) => {
    download(
      'https://github.com:DangoSky/react-scaffold-app#master',
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
