import React, { Component } from 'react';
import './MenuBar.css'

class MenuBar extends Component {

    render() {
        return (
            <div className="menubar_container" style={{height: this.props.height || "56px"}}>

            </div>
        );
    }
}
export default MenuBar;