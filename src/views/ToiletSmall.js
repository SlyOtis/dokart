import React, { Component } from 'react';
import './ToiletSmall.css'
import {MdArrowDownward, MdArrowUpward, MdDirections, MdAccessible} from 'react-icons/lib/md'

class ToiletSmall extends Component {

    render() {
        return (
            <div className="toiletSmall_container">
                {this.props.toilet ? this.renderContent() : <h6>Feil ved lasting av toalettdata</h6>}
            </div>
        );
    }

    renderContent() {
        return (
            <div className="toiletSmall_content_container">
                <div className="toiletSmall_header">
                    <p className="toiletSmall_counter_sum">{this.props.toilet.score} poeng</p>
                    <MdDirections className="toiletSmall_action_directions"/>
                </div>
                <div className="toiletSmall_main">
                    <div className="toiletSmall_counter">
                        <MdArrowUpward className="toiletSmall_counter_up"/>
                        <MdArrowDownward className="toiletSmall_counter_down"/>
                    </div>
                    <div className="toiletSmall_content">
                        <div className="toiletSmall_info">
                            <h2 className="toiletSmall_address">{this.props.toilet.adresse}</h2>
                            <h5 className="toiletSmall_place_no">{this.props.toilet.plassering}</h5>
                            <h5 className="toiletSmall_place_en">{this.props.toilet.place}</h5>
                            <div className="toiletSmall_times">
                                <h6 className="toiletSmall_time toiletSmall_times_weekday">Ukedager  {this.props.toilet.tid_hverdag}</h6>
                                <h6 className="toiletSmall_time toiletSmall_times_saturday">Lørdager  {this.props.toilet.tid_lordag}</h6>
                                <h6 className="toiletSmall_time toiletSmall_times_sunday">Søndager  {this.props.toilet.tid_sondag}</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="toiletSmall_actions">
                    <MdAccessible className="toiletSmall_action"/>
                </div>
            </div>
        );
    }
}
export default ToiletSmall;