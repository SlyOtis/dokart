import React, { Component } from 'react';
import './Main.css'
import MenuBar from "../views/MenuBar";
import {Route} from 'react-router-dom';
import ListView from "../views/ListView";

class Main extends Component {

    render() {
        return (
            <div className="main_container">
                <div className="main_container_start"></div>
                <div className="main_container_center">
                    <div className="main_content_container">
                        <Route path="/all" component={ListView}/>
                    </div>
                    <MenuBar/>
                </div>
                <div className="main_container_end"></div>
            </div>
        );
    }
}
export default Main;