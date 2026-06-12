import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://github.com/Freezrik/MyProject-React.git', // НАПРИМЕР: если ссылка freezrik.github.io/diia, то пишите '/diia/'
})
