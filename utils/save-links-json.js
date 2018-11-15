const fs = require('fs');

let saveToJSONFile = (payload) => {
  const jsonFilePath = '../links.json';
  let jsonString = JSON.stringify(payload);

  fs.writeFileSync(jsonFilePath, jsonString);
};

module.exports = {
  saveToJSONFile
};
