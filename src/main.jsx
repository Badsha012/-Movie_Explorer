import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import './professional.css';
import './footer-fix.css';
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode><App /></StrictMode>,
);
