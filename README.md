# first-line

Get the first line of a file.

## Example

``` bash
$ cat fixture.txt
1
2
3
```

``` javascript
var firstLine = require('first-line');
var path = require('path');

var p = path.resolve(__dirname, 'fixture.txt');

firstLine(p, function(error, line) {
  if (error) {
    throw error;
  }

  console.log(line.toString());
  // => '1'
});
```

## Installation

``` bash
$ npm install first-line
```

## API

``` javascript
var firstLine = require('first-line');
```

### `firstLine(file, callback)`

Reads the file at _String_ `file` and calls `callback(error, line)`, where
`error` is any _Error_ encountered and `line` is a _Buffer_ of the first line of
`file`.
