const http = require('http');
const fs = require('fs');

let download = (file_name, link) => {
  let file = fs.createWriteStream(`./downloads/${file_name}`);
  http.get(link, res => res.pipe(file));
};

module.exports = {
  download
};
