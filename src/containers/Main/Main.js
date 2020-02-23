import React, {Component} from "react";
import classes from "./Main.module.css";
import Aside from "../../components/Aside/Aside";
import Body from "../../components/Body/Body";

class Main extends Component {


    render() {
        return (
            <div className={classes.Main}>
                <Aside/>
                <Body/>
            </div>
        )
    }
}

export default Main;