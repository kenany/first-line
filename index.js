var split = require('binary-split');
var fs = require('graceful-fs');
var once = require('once');

function firstLine(file, callback) {
  callback = once(callback);

  var splitter = split();
  splitter.on('data', function(item) {
    callback(null, item);
    splitter.end();
  });
  splitter.on('error', callback);

  var stream = fs.createReadStream(file);

  // catch ENOENT
  stream.on('error', callback);

  stream.pipe(splitter);
}

module.exports = firstLine;