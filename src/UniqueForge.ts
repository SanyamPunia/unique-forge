import { ForgeOptions, RandomFunction } from './types';
import { defaultAlphabet, defaultSize } from './constants';
import { generateId } from './utils';

export class UniqueForge {
  // protected to allow access in child classes
  protected alphabet: string;
  protected size: number;
  protected random: RandomFunction;

  constructor(options: ForgeOptions = {}) {
    this.alphabet = options.alphabet || defaultAlphabet;
    this.size = options.size || defaultSize;
    this.random = options.random || Math.random;
  }

  generate(): string | Promise<string> {
    return generateId(this.size, this.alphabet, this.random);
  }

  // custom alphabet string
  setAlphabet(alphabet: string): void {
    this.alphabet = alphabet;
  }

  // custom size
  setSize(size: number): void {
    this.size = size;
  }
}
