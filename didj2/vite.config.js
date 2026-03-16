import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],


  server: {
    host: '127.0.0.1',  // принудительно используем IPv4
    port: 1025,
    strictPort: true,    // не переключаться на другой порт если 5173 занят
    open: true          // автоматически открыть браузер
  }


})
