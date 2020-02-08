import React from "react";
import style from "./Body.module.css"
import {BrowserRouter, Route} from "react-router-dom";

const Body = () => {
    return (
        <BrowserRouter>
        <div className={style.body}>
            Please select a chat to start messaging
            <Route />
            <Route />
        </div>
        </BrowserRouter>
    )};

export default Body;