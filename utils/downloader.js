const http = require('http');
const fs = require('fs');

const downloadLinks = require('../links.json');

let download = () => {
  downloadLinks.forEach(song => {
    const { file_name, link } = song;
    console.log(`Now downloading => ${file_name} ...`);
    let file = fs.createWriteStream(`./downloads/${file_name}`);
    http.get(link, res => res.pipe(file));
  });
};

module.exports = {
  download
};
