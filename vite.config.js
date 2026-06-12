import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/MyProject-React/', // Вот так правильно! Только название репозитория с косыми чертами
})
