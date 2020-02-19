import * as serviceWorker from './serviceWorker'
//import usersData from "./redux/redux-store"
import state from "./redux/store";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";





let renderEntireTree = state => {
    ReactDOM.render(<App state={state}/>, document.getElementById('root'));
};

renderEntireTree(state);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
