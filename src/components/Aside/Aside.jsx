import React from "react";
import style from "./Aside.module.css"
import User from "./User/User";

const Aside = () => {
    return (
    <div className={style.aside}>
        <ul>
            <User name="Mike"/>
            <User name="John"/>
            <User name="Sarah"/>
        </ul>
    </div>
    )};

export default Aside;