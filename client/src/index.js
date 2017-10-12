import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import App from './components/App';
import reducers from "./reducers";
import "./css/app.css";

import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers, applyMiddleware(reduxThunk));

 const jsx = (
    <Provider store={store}>
    <App/>
  </Provider>
);
ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
