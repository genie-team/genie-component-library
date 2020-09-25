import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';
import copy from 'rollup-plugin-copy'
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'genie',
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: 'genie-component-library',
      proxiesFile: '../genie-component-library-react/src/components.ts',
    }),
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
          { src: 'node_modules/pdfjs-dist/build/pdf.worker.min.js', dest: ['www/build/js', 'dist/genie/js'] }
        ],
        verbose: true
      })
    ]
  }
};
