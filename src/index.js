import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');

if (rootElement !== null) {
  const appRoot = createRoot(rootElement);
  appRoot.render(<App />);
}