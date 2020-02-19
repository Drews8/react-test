import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Search from "./components/Search/Search";
import Aside from "./components/Aside/Aside";
import {BrowserRouter} from "react-router-dom";



function App(props) {


    return (
        <div className={`wrapper`}>
            <BrowserRouter>
                <Header/>
                <Search/>
                <Aside usersData={props.state.usersData}/>
                <Body state={props.state}/>
            </BrowserRouter>
        </div>
    )
};

export default App;
