import React from 'react';
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Search from "./components/Search/Search";
import Aside from "./components/Aside/Aside";
import {BrowserRouter} from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import Main from "./containers/Main/Main";


function App(props) {


    return (
        <Layout>
            <BrowserRouter>
                <Header/>
                <Main/>
            </BrowserRouter>
        </Layout>
        /*<div className={`wrapper`}>
            <BrowserRouter>

                <Search/>
                <Aside usersData={props.state.usersData}/>
                <Body state={props.state}/>
            </BrowserRouter>
        </div>*/
    )
};

export default App;
