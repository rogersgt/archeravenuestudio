var exec = require('child_process').exec;
var config = require('./assets.config');

function puts(error, stdout, stderr) {
  // eslint-disable-next-line
  console.log(stdout);
 }

const moveIcon = "cp src/archer.ico dist/favicon.ico";
exec(moveIcon, puts);

for (let i = 0; i < config.files.length; i++) {
    const srcPth = "src/assets/";
    const dstPth = "dist/assets/";
    const cmd = "cp " + srcPth + config.files[i] + " " + dstPth + config.files[i];
    exec(cmd, puts);
}
