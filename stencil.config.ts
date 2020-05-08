import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';
import copy from 'rollup-plugin-copy'

export const config: Config = {
  namespace: 'genie',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
	],
	plugins: [
    sass(),
	],
  rollupPlugins: {
    after: [
      globals(),
      builtins(),
      copy({
        targets: [
          { src: 'src/static/**/*', dest: 'www/static' }
        ],
        verbose: true
      })
    ]
  }
};
