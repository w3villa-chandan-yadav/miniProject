import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  darkMode: 'media  ', // Enable dark mode using class
  theme: {
    extend: {
      // Your theme customizations (if any)
    },
  },
  plugins: [react(),tailwindcss()],
})
