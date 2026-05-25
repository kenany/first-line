import { resolve } from 'node:path';
import { firstLine } from 'first-line';
import { describe, expect, it } from 'vitest';

describe('firstLine', () => {
  it('only returns first line', async () => {
    const file = resolve(import.meta.dirname, 'fixture.txt');
    const line = await firstLine(file);
    expect(line).toBe('1');
  });

  it('returns `null` for empty file', async () => {
    const file = resolve(import.meta.dirname, 'empty.txt');
    const line = await firstLine(file);
    expect(line).toBeNull();
  });

  it('returns `null` for blank file', async () => {
    const file = resolve(import.meta.dirname, 'just-newline.txt');
    const line = await firstLine(file);
    expect(line).toBeNull();
  });
});
