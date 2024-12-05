import { generateId } from '../src/utils';

describe('generateId', () => {
  it('should generate an ID with the specified size and alphabet', () => {
    const size = 10;
    const alphabet = 'ABC123';
    const random = jest.fn(() => 0.5);
    const id = generateId(size, alphabet, random);
    expect(id).toHaveLength(size);
    expect(id).toMatch(/^[ABC123]+$/);
  });
});
