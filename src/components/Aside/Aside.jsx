import React from "react";
import classes from "./Aside.module.css"
import AsideItem from "./AsideItem/AsideItem";

const Aside = props => {

    const usersItems = props.usersData.map((item, key) => {
        return <AsideItem key={key} id={item.id} firstName={item.firstName} lastName={item.lastName} imgUrl={item.imgUrl}/>
    });

    return (
    <div className={classes.aside}>
        <ul>
            {usersItems}
        </ul>
    </div>
    )};

export default Aside;