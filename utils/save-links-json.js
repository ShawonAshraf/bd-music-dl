const fs = require('fs');

let saveToJSONFile = (payload) => {
  console.log('writing to json');
  const jsonFilePath = './links.json';
  let jsonString = JSON.stringify(payload);

  fs.writeFileSync(jsonFilePath, jsonString);
};

module.exports = {
  saveToJSONFile
};
