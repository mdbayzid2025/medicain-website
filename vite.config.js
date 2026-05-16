import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    tailwindcss(),          // ← Add this (must be before react())
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  resolve: {
    alias: {
      "Dashboard": path.resolve(__dirname, "./src/Dashboard"),
      "Pages": path.resolve(__dirname, "./src/Pages"),
      "features": path.resolve(__dirname, "./src/features"),
      "component": path.resolve(__dirname, "./src/component"),
      "utils": path.resolve(__dirname, "./src/utils"),
      "app": path.resolve(__dirname, "./src/app"),
      "context": path.resolve(__dirname, "./src/context"),
      "hooks": path.resolve(__dirname, "./src/hooks"),
    }
  }
})