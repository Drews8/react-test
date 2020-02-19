import React from "react";
import style from "./Dialog.module.jsx.css";

const Dialog = props => {


    return (
        <div className={style.dialogWrapper}>
            {props.userData.messages.map((item, index) => {
                return <div>item</div>
            })}
        </div>

    )
};

export default Dialog;