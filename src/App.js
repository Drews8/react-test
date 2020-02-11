import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Search from "./components/Search/Search";
import Aside from "./components/Aside/Aside";
import {BrowserRouter} from "react-router-dom";

function App() {

    const usersData = [
        {id: 1, firstName: 'Mike', lastName: "Wazowski", imgUrl: 'https://i.imgflip.com/3bkcig.jpg'},
        {id: 2, firstName: 'John', lastName: "Wick", imgUrl: 'https://vignette.wikia.nocookie.net/filmguide/images/3/33/John_Wick.jpg/revision/latest?cb=20190519024442'},
        {id: 3, firstName: 'Andrii', lastName: "Prokhorenko", imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcScyMb0DAxDXzdCn_H2ssqWjLVVxnfybkN5HBHFcElu5KgeLbvp'},
        {id: 4, firstName: 'James', lastName: "Sullivan", imgUrl: 'https://i.pinimg.com/originals/91/33/d4/9133d4205821f17cff0efa4d95b1d650.png'},
    ];

    return (
        <div className={`wrapper`}>
            <BrowserRouter>
                <Header/>
                <Search/>
                <Aside usersData={usersData}/>
                <Body usersData={usersData}/>
            </BrowserRouter>
        </div>
    )
};

export default App;
