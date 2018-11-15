let getCorrectlyEncodedDownloadUrl = (songUrl) => {
  let newSongUrl = `https://${songUrl.slice(2)}`;
  let downloadURL = newSongUrl.replace('https://www.music.com.bd/download/',
    'http://download.music.com.bd/');
  return encodeURI(downloadURL);
};


// get the song file name from the url
let getFileName = (songUrl) => {
  let tokens = songUrl.split(' - ');
  return tokens[tokens.length - 1];
};


// remove the html extension from  the end of the URL
let removeHtmlExtension = (fetchedUrl) => {
  return fetchedUrl.replace('.html', '');
};


module.exports = {
  getCorrectlyEncodedDownloadUrl,
  getFileName,
  removeHtmlExtension
};
