import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from "react-router-dom";

import App from './components/app';
import {BookstoreServiceProvider} from './components/bookstore-service-context';
import ErrorBoundary from "./components/error-boundary"

import store from "./store"
import BookstoreService from "./services";

const bookstoreService = new BookstoreService();

ReactDOM.render(
  <Provider store={store} >
    <ErrorBoundary>
      <BookstoreServiceProvider value={bookstoreService} >
        <Router>
          <App />
        </Router>
      </BookstoreServiceProvider>
    </ErrorBoundary>
  </Provider>

  ,
  document.querySelector('#root'));
