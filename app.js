#!/usr/bin/env node
const yargs = require('yargs');

const scrapper = require('./utils/scrapper');
const downloader = require('./utils/downloader');

const argv = yargs.argv;
const downloadPath = argv.path;
const url = argv.link;

let scrap = async () => {
  console.log('Preparing the downloader ...');
  await scrapper.scrap(url);
};

scrap().then(() => {
  console.log('Downloading ... grab a cup of coffee or something chilled while this works!');
  downloader.download(downloadPath);
}).catch((e) => {
  console.log(e.toString());
});

module.exports = {
  scrapper,
  downloader
};
