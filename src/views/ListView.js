import React, { Component } from 'react';
import './ListView.css'
import loading from '../assets/loading.gif';
import ToiletSmall from "./ToiletSmall";
import TearedPaper from "../assets/teared_paper";
//import axios from 'axios';

class ListView extends Component {

    constructor(props) {
        super(props);
        this.state = {isLoading: true};
    }
    
    getDummyData(id) {
        return {
            id: id,
            adresse: "Gata Something",
            dame: "1",
            herre: "1",
            latitude: "812893123.123",
            longitude: "789712738.123",
            pissoir_only: "1",
            place: "address in english",
            plassering: "address in norwegian",
            pris: "10",
            rullestol: "1",
            stellrom: "NULL",
            tid_hverdag: "12:40 - 24:00",
            tid_lordag: "12:40 - 24:00",
            tid_sondag: "12:40 - 24:00",
            score: 420
        }
    }

    componentDidMount() {
        const toilets = [];
        for (let i = 0; i <= 14; i++) {
            const data = this.getDummyData(i+1);
            toilets.push(<ToiletSmall key={data.id} toilet={data}/>);
        }
        this.setState({toilets: toilets, isLoading: false});

        /*axios.get("https://hotell.difi.no/api/json/bergen/dokart")
            .then((res) => {
                const toilets = [];
                Object.keys(res.data.entries).forEach((key) => {
                    //console.log('Added toilet: ' + res.data.entries[key].id);
                    toilets.push(<ToiletSmall toilet={res.data.entries[key]} />);
                });
                this.setState({toilets: toilets, isLoading: false});
            }); */
    }

    render() {
        return (
            <div className="listView_container">
                <div className={["listView_loading_container", this.getLoadingContainerClass()].join(' ')}>
                    <h3 className="listView_loading_txt">Laster inn toaletter</h3>
                    <img className="listView_loading_img" src={loading} alt="loading"/>
                </div>
                <div className={["listView_scrollPane", this.getScrollPaneClass()].join(' ')}>
                    <div className="listView_content">
                        <div className="listView_head"/>
                        {this.state.toilets}
                    </div>
                </div>
            </div>
        );
    }

    getLoadingContainerClass() {
        return this.state.isLoading ? "listView_loading_container_visible" : "listView_loading_container_hidden"
    }

    getScrollPaneClass() {
        return this.state.isLoading ? "listView_scrollPane_loading" : "listView_scrollPane_ready";
    }
}
export default ListView;