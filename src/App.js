import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import 'react-toastify/dist/ReactToastify.css';

import Routes from './routes';
import history from './services/history';
import theme from './styles/theme';
import GlobalStyles from './styles/global';

import { persistor, store } from './state';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <ThemeProvider theme={theme}>
            <ToastContainer />
            <DndProvider backend={HTML5Backend}>
              <Routes />
            </DndProvider>
            <GlobalStyles />
          </ThemeProvider>
        </Router>
      </PersistGate>
    </ Provider>
  );
}

export default App;
