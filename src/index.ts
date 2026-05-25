import { createReadStream } from 'node:fs';
import split from 'binary-split';
import once from 'once';

/**
 * Reads the first line of a file.
 *
 * @param file Path to the file to read.
 * @returns The first line of the file, or `null` if the file is empty or
 *   contains only newlines.
 */
export function firstLine(file: string): Promise<string | null> {
  return new Promise((_resolve, _reject) => {
    const resolve = once(_resolve);
    const reject = once(_reject);

    const splitter = split();

    splitter.on('data', (chunk: Buffer) => {
      splitter.end();
      resolve(chunk.length > 0 ? chunk.toString() : null);
    });

    splitter.on('error', reject);

    const stream = createReadStream(file);

    stream.on('error', (error: Error) => {
      splitter.end();
      reject(error);
    });

    stream.on('end', () => {
      resolve(null);
    });

    stream.pipe(splitter);
  });
}
