import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';

import { App } from 'components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter basename="/VocabBuilder">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
