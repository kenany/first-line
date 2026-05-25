declare module 'binary-split' {
  import type { Transform } from 'node:stream';

  /**
   * Creates a transform stream that splits input on the given delimiter.
   *
   * @param delimiter The byte sequence to split on. Defaults to `os.EOL`.
   * @returns A transform stream that emits chunks split by the delimiter.
   */
  function binarySplit(delimiter?: string | Buffer): Transform;
  export = binarySplit;
}
