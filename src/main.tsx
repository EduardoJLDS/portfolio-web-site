import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './styles/index.css';
import { initPerformanceOptimizations } from './utils/performance.ts';

// Inicializar optimizaciones de performance
initPerformanceOptimizations();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
