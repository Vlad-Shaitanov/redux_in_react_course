import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore, compose, applyMiddleware } from "redux"; //Хранилище состояния, Middlware - функция
import { Provider } from "react-redux"; //Связываем стор с реакт-приложением
// import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./redux/rootReducer";
import { forbiddenWordsMiddleware } from "./redux/middleware";
import { sagaWatcher } from "./redux/sagas";

const saga = createSagaMiddleware();
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, forbiddenWordsMiddleware, saga),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
console.log(store);

saga.run(sagaWatcher);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
