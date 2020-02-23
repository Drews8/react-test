import React from "react";
import style from "./Body.module.css"
import {Route} from "react-router-dom";
import Dialog from "./Dialog/Dialog";


const Body = props => {

    const StartPage = () => {
        return (
            <div>Please select a chat to start messaging</div>
        )
    };

    /*const usersDialogs = props.state.usersData.map(item => {
        return <Route path={`/${item.firstName}${item.lastName}`} render={() => <Dialog userData={item}/>}/>
    });*/

    return (
        <div className={style.body}>
            <div className={style.body_inner}>
                <Route exact path="/" component={StartPage}/>
                <div>
                    {/*{usersDialogs}*/}
                    <form className={style.bottomPanel}>
                        <input type="text" onChange={(event) => {

                            props.state.handlerInputText(event.target.value);

                        }}/>
                        <button onClick={(event) => {
                            event.preventDefault();

                        }}>
                            send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Body;