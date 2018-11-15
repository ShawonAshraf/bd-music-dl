const request = require('request');
const cheerio = require('cheerio');

const urlProcessor = require('./process-urls');
const linkSaver = require('./save-links-json');

let scrap = (url) => {
  request(url, (error, response, html) => {
    if (error) {
      console.log(error.toString());
    } else {
      let $ = cheerio.load(html);
      let downloadLinkObjects = [];

      $('.list-group-item').each((index, element) => {
        // exclude the first link since that points to parent dir
        if (index > 0 && element.type === 'tag' && element.name === 'a') {
          let songUrl = element.attribs.href;
          // remove .html at the end of the url
          songUrl = urlProcessor.removeHtmlExtension(songUrl);

          // separate the song file name
          let songFileName = urlProcessor.getFileName(songUrl);

          // properly encode URL
          let encodedUrl = urlProcessor.getCorrectlyEncodedDownloadUrl(songUrl);

          // push to array as an object
          let songObject = {
            file_name: songFileName,
            link: encodedUrl
          };
          downloadLinkObjects.push(songObject);
        }
      });

      // write links to JSON file
      linkSaver.saveToJSONFile(downloadLinkObjects);
    }
  });
};

module.exports = {
  scrap
};
