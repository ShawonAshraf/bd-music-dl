const http = require('http');
const fs = require('fs');

const downloadLinks = require('../links.json');

let download = (path) => {
  console.log('\nThe following songs will be downloaded => \n');
  downloadLinks.forEach(song => {
    const { file_name, link } = song;
    console.log(`${file_name} ...`);
    let file = fs.createWriteStream(`${path}/${file_name}`);
    http.get(link, res => res.pipe(file));
  });
};

module.exports = {
  download
};
