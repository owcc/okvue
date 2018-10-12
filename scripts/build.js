var getDiretories = require("./util/get_diretories");
var path = require("path");
var cp = require("child_process");

var __root = path.resolve(__dirname, "../");
async function build() {
  var pkg = await getDiretories(__root + "/packages");
  return Promise.all(
    pkg.map(async item => {
      await cp.execSync(`cd ${__root}/packages/${item} && npm run build`);
    })
  );
}

build();
