import { UniqueForge } from '../src';

describe('UniqueForge', () => {
  it('should generate an ID with default settings', () => {
    const forge = new UniqueForge();
    const id = forge.generate();
    expect(id).toHaveLength(21);
    expect(id).toMatch(/^[A-Za-z0-9_-]+$/);
  });

  it('should generate an ID with custom alphabet and size', () => {
    const forge = new UniqueForge({ alphabet: 'ABC123', size: 10 });
    const id = forge.generate();
    expect(id).toHaveLength(10);
    expect(id).toMatch(/^[ABC123]+$/);
  });

  it('should allow changing alphabet and size', () => {
    const forge = new UniqueForge();
    forge.setAlphabet('XYZ');
    forge.setSize(5);
    const id = forge.generate();
    expect(id).toHaveLength(5);
    expect(id).toMatch(/^[XYZ]+$/);
  });
});
