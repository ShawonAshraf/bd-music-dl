# bd-music-dl
Batch downloads a full album from music.com.bd

## Why though
One problem I faced on the website was that, older albums don't have an option to download
all the songs as as a compressed (zip) folder. Which means I had to download all the songs one by
one - it's 2018, we need to automate things! Hence this one.

## Run and Install

Clone the repo and then `cd` into the directory. Then install dependencies for the project.

```bash
npm install
```

Next up, run the `app.js` file using `node` from your command line. The command should be like this

```bash
node app.js --link=Link to the album you want to download --path=Directory on your computer where you want to download files
```


For example -
```bash
node app.js --link=https://www.music.com.bd/download/browse/A/Arnob/Hok%20Kolorob/ --path=/Users/shawon/Desktop/Songs
```

## License
MIT
