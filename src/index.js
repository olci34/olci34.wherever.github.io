import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom"; // routes url
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import appReducer from "./reducers/appReducer.js";
import thunk from "redux-thunk";

const initialState = {
  stage: 'Intro',
  zoomInPositions: [-0.2, 0, 1.2],
  errors: [],
  user: {
    id: `${localStorage.getItem('userId')}`,
    name: "",
  },
  planets: [],
  trips: [],
};

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
);

const store = createStore(appReducer, initialState, enhancer);

// const store = createStore(
//   appReducer,
//   initialState,
//   compose(applyMiddleware(thunk), composeWithDevTools())
// );

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
