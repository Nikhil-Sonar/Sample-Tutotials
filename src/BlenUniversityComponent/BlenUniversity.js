import React, { Component } from "react";
import './BlenUniversity.css'

class BlenUniversityComp extends Component {
    constructor(props){
        super(props)
        this.state = {
            cardOne : ""
        }
    }

    render() {
        return (
            <div className="section-9">
                <div className="Blen-university">
                    <div className="Blen-university-card">
                        <div className="Blen-university-card-text">
                            <div>
                                <h2 className="Blen-university-card-text-heading">Secure a Seat in your <span className="IBDP-text">Dream University with MS</span></h2>
                                <div className="Blen-university-card-text-heading-para">Our students made it to these universities for their Undergraduate</div>
                            </div>
                        </div>
                        <div className="Blen-university-card-data">
                            <div className="Blen-university-card-data-flx">
                                <img src=""></img>
                            </div>
                        </div>
                        <div className="Blen-university-card-btn">
                            <a href="https://app.helloblen.com/register">Start your Free Trial today</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BlenUniversityComp;