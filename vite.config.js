import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as dotenv from 'dotenv'

dotenv.config()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    proxy: {
      "/v1/api": {
        // eslint-disable-next-line no-undef
        target: process.env.VITE_SERVER_URL, // Backend URL
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
