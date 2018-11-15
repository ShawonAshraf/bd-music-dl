const yargs = require('yargs');

const scrapper = require('./utils/scrapper');
const downloader = require('./utils/downloader');

const argv = yargs.argv;
const downloadPath = argv.path;
const url = argv.link;

let doTheScrapping = async () => {
  await scrapper.scrap(url);
};

doTheScrapping().then(() => {
  downloader.download(downloadPath);
});
