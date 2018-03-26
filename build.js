const fs = require('fs');
const ncp = require('ncp');
const browserify = require('browserify');
const vueify = require('vueify');
const babelify = require('babelify');
const envify = require('envify/custom');
const dotenv = require('dotenv');

dotenv.config({ path: `${__dirname}/${process.env.NODE_ENV}.env` });

const distDir = `${__dirname}/dist`;
const distExists = !!fs.existsSync(distDir);

if (!distExists) {
  fs.mkdirSync(distDir);
}

fs.copyFileSync(`${__dirname}/src/index.html`, `${__dirname}/dist/index.html`);
fs.copyFileSync(`${__dirname}/src/favicon.ico`, `${__dirname}/dist/favicon.ico`);
ncp(`${__dirname}/src/assets`, `${__dirname}/dist/assets`);

browserify(`${__dirname}/src/app.js`)
.transform(babelify, { presets: ['env'] })
.transform(vueify)
.transform(envify(process.env), { global: true })
.bundle()
.pipe(fs.createWriteStream(`${__dirname}/dist/index.js`));
