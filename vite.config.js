import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'  // ⬅️ à ne pas oublier
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
   resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // ⬅️ crée l'alias @ vers /src
    },
   }
})
