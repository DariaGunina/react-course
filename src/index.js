import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { CustomThemeProvider } from "./styles/theme";
import { store,  persistor } from './store';

import './styles/styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <CustomThemeProvider> 
          <App />
        </CustomThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
