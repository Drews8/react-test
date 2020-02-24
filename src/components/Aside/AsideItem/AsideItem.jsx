import React from "react"
import style from "./AsideItem.module.css"
import {NavLink} from "react-router-dom";

const AsideItem = props => {
    return (
        <li>
            <NavLink className={style.user} to={`/${props.firstName}${props.lastName}`} activeClassName={style.active}>
                <div className={style.user_img}>
                    <img src={props.imgUrl} alt="img"/>
                </div>
                <div className={style.user_info}>
                {props.firstName} {props.lastName}
                </div>
                <div className={style.user_time}>today</div>
            </NavLink>
        </li>
    )
};

export default AsideItem;