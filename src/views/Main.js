import React, { Component } from 'react';
import './Main.css'
import MenuBar from "./MenuBar";
import {Route} from 'react-router-dom'
import All from "./main/All";

class Main extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main_container">
                <div className="main_content_container">
                    <Route path="/all" component={All}/>
                </div>
                <MenuBar/>
            </div>
        );
    }
}
export default Main;