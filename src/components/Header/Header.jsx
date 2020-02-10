import React from "react";
import style from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return <div className={style.header}>
        <NavLink to="/" className={style.tgLogo}></NavLink>
    </div>
}

export default Header;