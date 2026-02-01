import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    // serve files from `templates/` as static public files
    publicDir: 'templates',
    server: {
        port: 5173,
        proxy: {
            '/api': 'http://localhost:8080',
            '/health': 'http://localhost:8080'
        }
    }
})
