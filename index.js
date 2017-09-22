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

  // Ensure that `callback` has been called by now, since the end of the stream
  // has been reached. If `callback` has already been called, then this will be
  // a no-op since `callback` was `once`-wrapped above. This is here for empty
  // streams which won't trigger the `'data'` event.
  stream.on('end', function() {
    callback(null, null);
  });

  stream.pipe(splitter);
}

module.exports = firstLine;
