import React from "react";
import './BlenCommunity.css'
import cardImage1 from '../asset/Student-image.jpg';
// import scollToRef from '../HeaderComponent/BlenHeader'

function BlenCommunityComp() {

    return (
        <div className="section-7">
            <div className="Blen-community">
                <div className="Blen-community-card">
                    <div className="Blen-community-card-text">
                        <div className="Blen-community-card-text-header">
                            <h1 className="Blen-community-card-text-heading-one">TUTOR TESTIMONIALS</h1>
                            <p className="tutor-border"></p>
                            <p className="Blen-community-card-text-heading">Tutor Information ...</p>
                        </div>
                    </div>
                    <div className="Blen-community-card-data">
                        <div className="Blen-community-card-data-flx">
                            <div className="Blen-community-card-data-one">
                                <img className="img-icon-tutor MS-uiniversity-img" src={cardImage1} repeat-x></img>
                                <div className="MS-uiniversity-text">
                                    <h1>
                                        heading
                                    </h1>
                                    <p>Try this: go to any page on your website and count the marketing claims you make. How many times is your business described as easy, smart, effective, trusted, reliable? Are there half a dozen claims</p>
                                </div>
                            </div>
                            <div className="Blen-community-card-data-one">
                                <img className="img-icon-tutor MS-uiniversity-img" src={cardImage1} repeat-x></img>
                                <div className="MS-uiniversity-text">
                                    <h1>
                                        heading
                                    </h1>
                                    <p>Try this: go to any page on your website and count the marketing claims you make. How many times is your business described as easy, smart, effective, trusted, reliable? Are there half a dozen claims </p>
                                </div>
                            </div>
                            <div className="Blen-community-card-data-one">
                                <img className="img-icon-tutor MS-uiniversity-img" src={cardImage1} repeat-x></img>
                                <div className="MS-uiniversity-text">
                                    <h1>
                                        heading
                                    </h1>
                                    <p>Try this: go to any page on your website and count the marketing claims you make. How many times is your business described as easy, smart, effective, trusted, reliable? Are there half a dozen claims</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlenCommunityComp;