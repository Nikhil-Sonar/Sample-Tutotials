import React, { Component } from "react";
import './BlenDynamic.css'
import centerDYlogo from '../asset/planet.png'
import sideImage1 from '../asset/biology.png'
import sideImage2 from '../asset/business.png'
import sideImage3 from '../asset/chemistry.png'
import sideImage4 from '../asset/economics.png'
import sideImage5 from '../asset/physics.png'
import sideImage6 from '../asset/psychology.png'
import sideImage7 from '../asset/math.png'

class BlenDynamicCard extends Component {

    render() {
        return (
            <section className="section-2">
                <div className="dynamic-card">
                    <div className="dynamic-card-text">
                        <div className="dynamic-card-text-exam">
                            <h2 className="dynamic-card-text-IBDP">Exactly What You Need!</h2>
                            <h3 className="dynamic-card-text-Teaching">A Powerful Learning and Teaching Platform for MS</h3>
                            <div className="dynamic-card-text-btn">
                                <a className="dynamic-card-text-btn-a" href="https://app.helloblen.com/register" target="_blank">Start your Free Trial today</a>
                            </div>
                        </div>
                    </div>
                    <div className="dynamic-card-img-container">
                        <div className="dynamic-card-img">
                            <div>
                                <div className="planetImage">
                                    <img className="big-image" src={centerDYlogo} ></img>
                                    <h1 className="dynamic-card-center-text">MS</h1>
                                    <div className="planet-Short-img1">
                                        <img src={sideImage1}></img>
                                    </div>
                                    <div className="planet-Short-img2">
                                        <img src={sideImage2} ></img>
                                    </div>
                                    <div className="planet-Short-img3">
                                        <img src={sideImage3} ></img>
                                    </div>
                                    <div className="planet-Short-img4">
                                        <img src={sideImage4} ></img>
                                    </div>
                                    <div className="planet-Short-img5">
                                        <img src={sideImage5} ></img>
                                    </div>
                                    <div className="planet-Short-img6">
                                        <img src={sideImage6} ></img>
                                    </div>
                                    <div className="planet-Short-img7">
                                        <img src={sideImage7} ></img>
                                    </div>
                                </div>
                                <div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="dynamic-card-Study-table">
                        <div className="dynamic-card-Study-table-browse">
                          <div className="dynamic-card-Study-table-browse-text">
                            <a className="generalButton" href="https://app.helloblen.com/register">Browse Subjects</a>
                          </div>
                        </div>
                        <div className="dynamic-card-Study-table-data">
                            <div className="dynamic-card-Study-table-one">
                                <div className="dynamic-card-Study-table-one-aa">
                                    <h3>Mathematics AA</h3>
                                    <p>Mathematics AAMath AA SL, Math AA HL</p>
                                </div>
                                <div className="dynamic-card-Study-table-one-Physics">
                                    <h3>Physics</h3>
                                    <p>Physics SL, Physics HL</p>
                                </div>
                            </div>
                            <div className="dynamic-card-Study-table-two">
                                <div className="dynamic-card-Study-table-two-ai">
                                    <h3>Mathematics AA</h3>
                                    <p>Mathematics AAMath AA SL, Math AA HL</p>
                                </div>
                                <div className="dynamic-card-Study-table-two-business">
                                    <h3>Physics</h3>
                                    <p>Physics SL, Physics HL</p>
                                </div>
                            </div>
                            <div className="dynamic-card-Study-table-three">
                            <div className="dynamic-card-Study-table-three-bio">
                                    <h3>Mathematics AA</h3>
                                    <p>Mathematics AAMath AA SL, Math AA HL</p>
                                </div>
                                <div className="dynamic-card-Study-table-three-eco">
                                    <h3>Physics</h3>
                                    <p>Physics SL, Physics HL</p>
                                </div>
                            </div>
                            <div className="dynamic-card-Study-table-four">
                            <div className="dynamic-card-Study-table-four-chemistry">
                                    <h3>Mathematics AA</h3>
                                    <p>Mathematics AAMath AA SL, Math AA HL</p>
                                </div>
                                <div className="dynamic-card-Study-table-four-phy">
                                    <h3>Physics</h3>
                                    <p>Physics SL, Physics HL</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        )
    }
}

export default BlenDynamicCard;