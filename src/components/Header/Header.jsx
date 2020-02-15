import React from "react";
import style from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return <div className={style.header}>
        <div className={style.headerBurger}>
            <span className={style.burgerItem}></span>
            <span className={style.burgerItem}></span>
            <span className={style.burgerItem}></span>
        </div>
        <NavLink to="/" className={style.tgLogo}></NavLink>
    </div>
}

export default Header;