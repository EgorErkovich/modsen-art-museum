import '@src/index.css';

import { App, ErrorBoundary } from '@index';
import store from '@store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

const root = document.getElementById('root');
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <Provider store={store}>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </Provider>
    </React.StrictMode>
  );
}
