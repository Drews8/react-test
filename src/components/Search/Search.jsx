import React from "react";
import style from "./Search.module.css"

const Search = () => {
    return (
        <div className={style.search}>
            <form action="submit">
                <input type="text" placeholder="Search"/>
            </form>
        </div>
    )};

export default Search;