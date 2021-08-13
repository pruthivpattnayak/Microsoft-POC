import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import RootReducer from "./reducer";
import SecondReducers from "./reducer-copy";

const combinedReducer = combineReducers({
    listsec: RootReducer,
    countsec: SecondReducers,
});
// const store = createStore(RootReducer);
const store = createStore(combinedReducer);

console.log("store", store.getState());
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
