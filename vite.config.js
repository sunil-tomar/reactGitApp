import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure output directory is set to 'dist'
    emptyOutDir: true, // Clear previous build files (optional)
  },
  base: 'reactGitApp', // Set base path (replace with your repo name)
});
