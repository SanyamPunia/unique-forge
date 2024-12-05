import { AsyncUniqueForge } from '../src';

describe('AsyncUniqueForge', () => {
  it('should generate an ID asynchronously', async () => {
    const forge = new AsyncUniqueForge();
    const id = await forge.generate();
    expect(id).toHaveLength(21);
    expect(id).toMatch(/^[A-Za-z0-9_-]+$/);
  });
});
