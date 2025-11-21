import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages等のサブディレクトリ環境でも動作するように相対パスを設定
  base: './',
  build: {
    outDir: 'dist',
  }
})