import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App';

createRoot(document.getElementById('root') as HTMLDivElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
