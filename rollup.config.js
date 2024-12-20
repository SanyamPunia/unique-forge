import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
    },
    {
      file: 'dist/index.mjs',
      format: 'es',
    },
  ],
  plugins: [
    typescript({
      declaration: true,
      declarationDir: 'dist',
      allowSyntheticDefaultImports: true,
    }),
  ],
  external: [],
};
