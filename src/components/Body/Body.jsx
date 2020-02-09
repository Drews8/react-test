import React from "react";
import style from "./Body.module.css"

import FirstUser from "./FirstUser";
import SecondUser from "./SecondUser";
import StartPage from "./StartPage";
import {Route} from "react-router-dom";

const Body = () => {
    return (

        <div className={style.body}>
            {/*<Route component={StartPage} path="/"/>*/}

            <Route path="/Mike" component={FirstUser}/>
            <Route path="/John" component={SecondUser}/>
        </div>

    )};

export default Body;