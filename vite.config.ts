import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: 'Assets', replacement: path.resolve(__dirname, 'src/assets') },
      { find: 'Components', replacement: path.resolve(__dirname, 'src/components') },
      { find: 'Pages', replacement: path.resolve(__dirname, 'src/pages') },
      { find: 'Styles', replacement: path.resolve(__dirname, 'src/styles') },
      { find: 'Types', replacement: path.resolve(__dirname, 'src/types') },
      { find: 'Helpers', replacement: path.resolve(__dirname, 'src/helpers') },
      { find: 'Store', replacement: path.resolve(__dirname, 'src/store') },
      { find: 'Hooks', replacement: path.resolve(__dirname, 'src/hooks') },
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ],
  },
});
