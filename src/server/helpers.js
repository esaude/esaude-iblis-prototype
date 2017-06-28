var fs = require('fs');

exports.readData = function(datafile) {
  var data = fs.readFileSync(datafile, 'utf8');
  return JSON.parse(data);
};

exports.getItemById = function(data, id) {
  var matchingItems = data.filter(function(item) {
      return item.nid == id;
  });
  return matchingItems;
};

exports.savePatientData = function(dataFile, data) {
  fs.writeFile(dataFile, JSON.stringify(data, null, 4), function(err) {
    if(err) {
      console.error(err);
    }
  });
};
