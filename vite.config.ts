import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'DesignSystem',
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) => {
        if (format === 'es') return 'index.esm.js';
        if (format === 'cjs') return 'index.cjs.js';
        return 'index.umd.js';
      },
    },
    rollupOptions: {
      external: [
        'clsx',
        'tailwind-merge'
      ],
      output: {
        exports: 'named',
        globals: {
          'clsx': 'clsx',
          'tailwind-merge': 'tailwindMerge'
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})