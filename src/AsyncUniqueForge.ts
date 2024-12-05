import { UniqueForge } from './UniqueForge';
import { ForgeOptions } from './types';

export class AsyncUniqueForge extends UniqueForge {
  constructor(options: ForgeOptions = {}) {
    super(options);
  }

  async generate(): Promise<string> {
    return new Promise((resolve) => {
      /*
       * setImmediate executes sooner in the event loop order
       * executes on the next event loop cycle
       * defer execution to next event loop iteration
       */
      setImmediate(() => {
        resolve(super.generate() as string);
      });
    });
  }
}
