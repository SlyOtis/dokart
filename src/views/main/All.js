import React, { Component } from 'react';
import './All.css'
import loading from '../../assets/loading.gif';
import ToiletSmall from "./ToiletSmall";
import axios from 'axios';

class All extends Component {

    constructor(props) {
        super(props);
        this.state = {isLoading: true};
    }

    componentDidMount() {
        axios.get("https://hotell.difi.no/api/json/bergen/dokart")
            .then((res) => {
                const toilets = [];
                Object.keys(res.data.entries).forEach((key) => {
                    //console.log('Added toilet: ' + res.data.entries[key].id);
                    toilets.push(<ToiletSmall toilet={res.data.entries[key]} />);
                });
                this.setState({toilets: toilets, isLoading: false});
            });
    }

    render() {
        return this.state.isLoading ? (
                <div className="all_loading_container">
                    <h2 className="all_loading_txt">Laster inn toaletter</h2>
                    <img className="all_loading_img" src={loading} alt="loading"/>
                </div>
            ) : (
            <div className="all_container">
                {this.state.toilets}
            </div>
        );
    }
}
export default All;