import React from "react"
import style from "./User.module.css"

const User = props => {
    return (
        <li>
            <a className={style.user} href={`/${props.name}`}>
                <div className={style.user_img}>
                    <img src="https://i.imgflip.com/3bkcig.jpg" alt="img"/>
                </div>
                <div className={style.user_info}>
                    {props.name}
                </div>
                <div className={style.user_time}>today</div>
            </a>
        </li>
    )
};

export default User;