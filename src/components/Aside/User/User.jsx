import React from "react"
import style from "./User.module.css"
import {NavLink} from "react-router-dom";

const User = props => {
    return (
        <li>
            <NavLink className={style.user} to={`/${props.name}`} activeClassName={style.active}>
                <div className={style.user_img}>
                    <img src="https://i.imgflip.com/3bkcig.jpg" alt="img"/>
                </div>
                <div className={style.user_info}>
                {props.name}
                </div>
                <div className={style.user_time}>today</div>
            </NavLink>
        </li>
    )
};

export default User;