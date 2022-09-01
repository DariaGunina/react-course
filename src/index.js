import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from "react-redux";
import { CustomThemeProvider } from "./styles/theme";
import { store } from './store';

import './styles/styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CustomThemeProvider> 
        <App />
      </CustomThemeProvider>
    </Provider>
  </React.StrictMode>
);
