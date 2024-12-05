export type StandardRandomFunction = () => number;
export type SecureRandomFunction = (size: number) => Uint8Array;

// Union (type) for both standard and secure random function
export type RandomFunction = StandardRandomFunction | SecureRandomFunction;

export interface ForgeOptions {
  alphabet?: string;
  size?: number;
  random?: RandomFunction;
}

export interface CustomForgeOptions extends ForgeOptions {
  prefix?: string;
  suffix?: string;
}

export interface IUniqueForge {
  generate(): string | Promise<string>;
  setAlphabet(alphabet: string): void;
  setSize(size: number): void;
}
