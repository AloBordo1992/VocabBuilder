import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';

import { App } from 'components/App';
import { store } from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <Provider store={store}>
      <BrowserRouter basename="/VocabBuilder">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
