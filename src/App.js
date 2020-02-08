import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Search from "./components/Search/Search";
import Aside from "./components/Aside/Aside";

function App() {
  return (
    <div className={`wrapper`}>
      <Header />
      <Search/>
      <Aside/>
      <Body/>
    </div>
  )};

export default App;
