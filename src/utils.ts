import { RandomFunction } from './types';

export function generateId(size: number, alphabet: string, random: RandomFunction): string {
  /*
   * calculates max value that fits the size of `alphabet`
   * alphabet.length = 6 >> valid indices are (0 to 5) 
   */
  const mask = (2 << (Math.log(alphabet.length - 1) / Math.LN2)) - 1;
  const step = Math.ceil((1.6 * mask * size) / alphabet.length);

  let id = '';
  while (true) {
    const bytes =
      random.length === 0
        ? Array.from({ length: step }, () => Math.floor((random as () => number)() * 256))
        : (random as (size: number) => Uint8Array)(step);

    for (let i = 0; i < step; i++) {
      const byte = typeof bytes === 'number' ? bytes : bytes[i];
      const alphabetIndex = byte & mask;
      if (alphabet[alphabetIndex]) {
        id += alphabet[alphabetIndex];
        if (id.length === size) return id;
      }
    }
  }
}
