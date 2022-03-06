import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace'
import typescript from 'rollup-plugin-typescript2'
import image from '@rollup/plugin-image'
import css from "rollup-plugin-import-css";

const packageJson = require('./package.json')

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    replace({
      ___DEV___: JSON.stringify(false),
    }),
    css(),
    peerDepsExternal(),
    image(),  
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
  ],
}
