import React, { Component } from 'react';
import './Splash.css';
import toilet from '../assets/toilet_icon.png';

class Splash extends Component {


    constructor(props) {
        super(props);
        this.state = {logoAlt: "Toalet logo"};
    }

    render() {
        return (
            <div className="splash_container">
                <h1>DoKart</h1>
                <img className="icon" src={toilet} alt={this.state.logoAlt}/>
            </div>
        );
    }
}
export default Splash;