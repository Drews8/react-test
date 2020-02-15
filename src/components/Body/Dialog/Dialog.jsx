import React from "react";
import style from "./Dialog.module.jsx.css";

const Dialog = props => {
    console.log(props);
    return (
        <div className={style.dialogWrapper}>
            <div>{props.userData.firstName}</div>
        </div>

    )
};

export default Dialog;