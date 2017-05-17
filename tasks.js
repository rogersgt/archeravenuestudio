const exec = require('child_process').exec;
const fs = require('fs');

function puts(error, stdout, stderr) {
  // eslint-disable-next-line
  console.log(stdout);
 }

const moveIcon = "cp src/archer.ico dist/favicon.ico";
const copyImages = "rm dist/assets/* && cp src/assets/* dist/assets/";
exec(moveIcon, puts);
exec(copyImages, puts);

fs.watch('./src/assets', () => {
  exec(copyImages, puts);
});

