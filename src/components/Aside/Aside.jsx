import React from "react";
import style from "./Aside.module.css"
import User from "./User/User";

const Aside = props => {

    /*const usersItems = props.usersData.map((item) => {
        return <User id={item.id} firstName={item.firstName} lastName={item.lastName} imgUrl={item.imgUrl}/>
    });*/

    return (
    <div className={style.aside}>
        <ul>
            {/*{usersItems}*/}
        </ul>
    </div>
    )};

export default Aside;