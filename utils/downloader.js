const http = require('http');
const fs = require('fs');

const downloadLinks = require('../links.json');

let download = (path) => {
  downloadLinks.forEach(song => {
    const { file_name, link } = song;
    console.log(`Now downloading => ${file_name} ...`);
    let file = fs.createWriteStream(`${path}/${file_name}`);
    http.get(link, res => res.pipe(file));
  });
};

module.exports = {
  download
};
