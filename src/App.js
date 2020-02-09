import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Search from "./components/Search/Search";
import Aside from "./components/Aside/Aside";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <div className={`wrapper`}>
            <BrowserRouter>
                <Header/>
                <Search/>
                <Aside/>
                <Body/>
            </BrowserRouter>
        </div>
    )
};

export default App;
