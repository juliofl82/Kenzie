import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// Remova a importação desnecessária de config

export default defineConfig({
  plugins: [react()],
  test: {
    // Configurações do Vitest
    globals: true,
    environment: 'jsdom',
    // Adicione mais configurações conforme necessário
  }
});


