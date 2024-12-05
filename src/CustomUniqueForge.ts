import { UniqueForge } from './UniqueForge';
import { CustomForgeOptions } from './types';
import { IUniqueForge } from './types';

export class CustomUniqueForge extends UniqueForge implements IUniqueForge {
  private prefix: string;
  private suffix: string;

  constructor(options: CustomForgeOptions = {}) {
    super(options);
    this.prefix = options.prefix || '';
    this.suffix = options.suffix || '';
  }

  // add prefix + suffix
  generate(): string {
    return `${this.prefix}${super.generate()}${this.suffix}`;
  }

  setPrefix(prefix: string): void {
    this.prefix = prefix;
  }

  setSuffix(suffix: string): void {
    this.suffix = suffix;
  }
}
