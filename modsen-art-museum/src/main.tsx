import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './index';

const root = document.getElementById('root');
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
