# first-line

Get the first line of a file.

## Example

``` javascript
import { firstLine } from 'first-line';
import { resolve } from 'node:path';

const file = resolve('fixture.txt');

const line = await firstLine(file);
console.log(line);
// => '1'
```

## Installation

``` bash
$ npm install first-line
```

## API

``` javascript
import { firstLine } from 'first-line';
```

### `firstLine(file: string): Promise<string | null>`

Reads the file at `file` and resolves with the first line as a string, or `null`
if the file is empty or contains only newlines.
