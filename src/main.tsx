import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import {defineCustomElements} from '@ionic/pwa-elements/loader';
import { Provider } from 'react-redux';

import store from './store/store';

const container = document.getElementById('root');
const root = createRoot(container!);
defineCustomElements(window);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);