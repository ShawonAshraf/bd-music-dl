# bd-music-dl
A CLI tool to batch download all the songs from an album from [music.com.bd](https://www.music.com.bd/)

[![NPM](https://nodei.co/npm/bd-music-dl.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/bd-music-dl/)

[![npm version](https://badge.fury.io/js/bd-music-dl.svg)](https://badge.fury.io/js/bd-music-dl)

## Why though
One problem I faced on the website was that, older albums don't have an option to download
all the songs as as a compressed (zip) folder. Which means I had to download all the songs one by
one - it's 2018, we need to automate things! Hence this one.

## Using as a node module
Install via `NPM` or `Yarn`
```bash
npm i -S bd-music-dl

# or via yarn
yarn add bd-music-dl
```
`require` the module in your code.

```javascript
const { scrapper, downloader } = require('bd-music-dl);

// url of the album
const url = 'https://www.music.com.bd/download/browse/A/Arnob/Hok%20Kolorob/';

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
```

## Installing as a CLI tool
To use it as a CLI tool from your shell/ command prompt, install it first from `npm`
```bash
npm install -g bd-music-dl
```
## Using it as a CLI tool
Format -
```bash
bd-music-dl --link=link_to_album --path=download_dir_on_your_pc
```

Example -
```bash
bd-music-dl --link=https://www.music.com.bd/download/browse/A/Arnob/Hok%20Kolorob/ --path=/Users/shawon/Desktop/Songs
```


## Dev

Clone the repo and then `cd` into the directory. Then install dependencies for the project.

```bash
npm install
```

Next up, run the `app.js` file using `node` from your command line. The command should be like this

```bash
node app.js --link=link_to_album --path=download_dir_on_your_pc
```


For example -
```bash
node app.js --link=https://www.music.com.bd/download/browse/A/Arnob/Hok%20Kolorob/ --path=/Users/shawon/Desktop/Songs
```

## License
MIT
