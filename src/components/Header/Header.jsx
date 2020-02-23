import React from "react";
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return <div className={classes.header}>
        <div className={classes.headerBurger}>
            <span className={classes.burgerItem}></span>
            <span className={classes.burgerItem}></span>
            <span className={classes.burgerItem}></span>
        </div>
        <NavLink to="/" className={classes.tgLogo}></NavLink>
    </div>
}

export default Header;