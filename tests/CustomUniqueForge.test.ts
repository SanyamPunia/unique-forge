import { CustomUniqueForge } from '../src';

describe('CustomUniqueForge', () => {
  it('should generate an ID with prefix and suffix', () => {
    const forge = new CustomUniqueForge({ prefix: 'pre_', suffix: '_suf' });
    const id = forge.generate();
    expect(id).toMatch(/^pre_[A-Za-z0-9_-]{21}_suf$/);
  });

  it('should allow changing prefix and suffix', () => {
    const forge = new CustomUniqueForge();
    forge.setPrefix('new_');
    forge.setSuffix('_end');
    const id = forge.generate();
    expect(id).toMatch(/^new_[A-Za-z0-9_-]{21}_end$/);
  });
});
