var firstLine = require('../');
var test = require('tape');
var isFunction = require('lodash.isfunction');
var path = require('path');
var Buffer = require('buffer').Buffer;
var isNull = require('lodash.isnull');

test('exports a function', function(t) {
  t.plan(1);
  t.ok(isFunction(firstLine));
});

test('only returns first line', function(t) {
  t.plan(3);
  var p = path.resolve(__dirname, 'fixture.txt');
  firstLine(p, function(error, line) {
    t.error(error);
    t.ok(Buffer.isBuffer(line));
    t.equals(line.toString(), '1');
  });
});

test('returns `null` for empty file', function(t) {
  t.plan(2);
  var p = path.resolve(__dirname, 'empty.txt');
  firstLine(p, function(error, line) {
    t.error(error);
    t.ok(isNull(line));
  });
});

test('returns `null` for blank file', function(t) {
  t.plan(2);
  var p = path.resolve(__dirname, 'just-newline.txt');
  firstLine(p, function(error, line) {
    t.error(error);
    t.ok(isNull(line));
  });
});
