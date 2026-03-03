import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default ({ mode }) => {
  // Load env variables
  const env = loadEnv(mode, __dirname, 'VITE_');

  return defineConfig({
    base: env.VITE_BASE_PATH || '/', // now VITE_BASE_PATH is read correctly
    plugins: [react(), tailwindcss()],
  });
};