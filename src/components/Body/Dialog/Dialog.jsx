import React from "react";
import style from "./Dialog.module.jsx.css";

const Dialog = props => {
    console.log(props);
    return (
        <div>{props.userData.firstName}</div>

    )};

export default Dialog;