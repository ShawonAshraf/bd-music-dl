let getCorrectlyEncodedDownloadUrl = (songUrl) => {
  let newSongUrl = `https://${songUrl.slice(2)}`;
  let downloadURL = newSongUrl.replace('https://www.music.com.bd/download/',
    'http://download.music.com.bd/');
  return encodeURI(downloadURL);
};


let getFileName = (songUrl) => {
  let fileName = songUrl.split(' - ')[1];
  return fileName;
};

let removeHtmlExtension = (fetchedUrl) => {
  return fetchedUrl.replace('.html', '');
};

module.exports = {
  getCorrectlyEncodedDownloadUrl,
  getFileName,
  removeHtmlExtension
};
