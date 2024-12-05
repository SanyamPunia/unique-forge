import { randomBytes } from 'crypto';
import { UniqueForge } from './UniqueForge';
import { ForgeOptions, SecureRandomFunction } from './types';

export class SecureUniqueForge extends UniqueForge {
  constructor(options: ForgeOptions = {}) {
    super({
      ...options,
      random: (options.random as SecureRandomFunction) || SecureUniqueForge.getSecureRandom(),
    });
  }

  private static getSecureRandom(): SecureRandomFunction {
    // check if environment supports web crypto API
    if (typeof window !== 'undefined' && window.crypto && window.crypto.getRandomValues) {
      return (size: number) => {
        const buffer = new Uint8Array(size);
        window.crypto.getRandomValues(buffer);
        return buffer;
      };
    } else {
      return randomBytes;
    }
  }
}
