import path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import babel from 'vite-plugin-babel'

export default defineConfig(({ mode }) => ({
  root: path.resolve(__dirname, 'src'),
  plugins: [react(), babel()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src', 'index.ts'),
      formats: ['es'],
      fileName: (format) => `index.${format}.js`,
    },
    watch: mode === 'production' ? null : {},
    // sourcemap: mode === 'production' ? false : 'inline',
    outDir: '../dist',
    emptyOutDir: false,
    target: 'es2015',
    rollupOptions: {
      external: [
        '@emotion/react',
        '@emotion/styled',
        '@mui/lab',
        '@mui/material',
        '@types/react',
        '@types/react-dom',
        'react',
        'react-dom',
        'react-icons',
      ],
      // output: {
      //   globals: {
      //     react: 'React',
      //     'react-dom': 'ReactDOM',
      //     'styled-components': 'styled',
      //   },
      // },
    },
  },
}))
