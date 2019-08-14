const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath = path.resolve(appDirectory, relativePath);

module.exports = {
  appAssets: resolveApp('src/public'),
  appBuild: resolveApp('dist'),
  appConfig: resolveApp('config'),
  appHtml: resolveApp('src/index.html'),
  appIndexJs: resolveApp('src/index.js'),
  appSrc: resolveApp('src'),
}
