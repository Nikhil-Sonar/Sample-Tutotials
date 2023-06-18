import React from "react";
import './BlenUniversity.css'
import universityImage from '../asset/university-image.avif'
function BlenUniversityComp(){
        return (
            <div className="section-9">
                <div className="Blen-university">
                    <div className="Blen-university-card">
                        <div className="Blen-university-card-text">
                            <div>
                                <h2 className="Blen-university-card-text-heading">Secure a Seat in your <span className="IBDP-text">Dream University with MindSetters</span></h2>
                                <div className="Blen-university-card-text-heading-para">Our students made it to these universities for their Undergraduate</div>
                            </div>
                        </div>
                        <div className="Blen-university-card-data">
                            <div className="Blen-university-card-data-flx">
                                <img src={universityImage}></img>
                            </div>
                        </div>
                        <div className="Blen-university-card-btn">
                            <a href="#">Start your Free Trial today</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

export default BlenUniversityComp;