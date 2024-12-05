import { SecureUniqueForge } from '../src';

describe('SecureUniqueForge', () => {
  it('shouild generate a secure ID', () => {
    const forge = new SecureUniqueForge();
    const id = forge.generate();
    expect(id).toHaveLength(21);
    expect(id).toMatch(/^[A-Za-z0-9_-]+$/);
  });
});
