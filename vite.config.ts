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
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        'index.native': resolve(__dirname, 'src/index.native.ts'),
      },
      name: 'DesignSystem',
      formats: ['es'],
      fileName: (_format, entryName) => {
        if (entryName === 'index.native') return `index.native.js`;
        return `index.js`;
      },
    },
    rollupOptions: {
      external: [
        'clsx',
        'tailwind-merge'
      ],
      output: {
        exports: 'named',
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})