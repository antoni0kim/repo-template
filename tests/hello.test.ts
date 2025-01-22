import { describe, test, expect } from 'vitest';
import printing from '../src/hello';

describe('Printing', () => {
  test('Unit test priting', () => {
    expect(printing(['Hello', 'world'])).toBe('Hello world');
  });
});
