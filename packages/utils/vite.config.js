/**
 * @file vite 配置文件
 * @author htmlin <linhuangdong@ones.ai>
 */
import path from 'path'
import { defineConfig } from 'vite'
import babel from '@rollup/plugin-babel'

export default defineConfig({
  mode: 'production',
  resolve: {
    alias: {
      scripts: path.resolve(__dirname, 'src/scripts'),
    },
  },
  build: {
    brotliSize: false,
    emptyOutDir: false,
    lib: {
      entry: 'src/scripts/index.ts',
      name: 'UI',
      fileName: 'index',
      formats: ['es', 'umd'],
    },
    terserOptions: {
      format: {
        beautify: true,
      },
      mangle: false,
    },
    rollupOptions: {
      external: ['react', /@babel/],
      plugins: [
        babel({
          rootMode: 'upward',
          babelHelpers: 'runtime',
          extensions: ['.ts', '.tsx'],
          skipPreflightCheck: true,
        }),
      ],
    },
  },
})
