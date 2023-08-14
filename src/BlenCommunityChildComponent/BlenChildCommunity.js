import React from "react";
import './BlenChildCommunity.css'
import cardImage1 from '../asset/Student-image.jpg'
import heartImage from '../asset/heart.png'

function BlenChildCommunityComp() {
    return (
        <div className="section-7">
            <div className="Blen-community-child">
                <div className="Blen-community-child-card">
                    <div className="Blen-community-child-card-text">
                        <div>
                            <h1 className="Blen-community-child-card-text-heading-one">PARENTS TESTIMONIALS</h1>
                            <p className="tutor-border-child"></p>
                            <h2 className="Blen-community-child-card-text-heading">Parents Review ...</h2>
                        </div>
                    </div>
                    <div className="Blen-community-child-card-data">
                        <div className="Blen-community-child-card-data-flx">
                            <div className="Blen-community-child-card-data-one">
                                <img className="img-icon-tutor MS-uiniversity-img-child" src={cardImage1} repeat-x></img>
                                <div className="MS-uiniversity-text-child">
                                    <h1>
                                        heading
                                    </h1>
                                    <p>Try this: go to any page on your website and count the marketing claims you make. How many times is your business described as easy, smart, effective, trusted, reliable? Are there half a dozen claims</p>
                                </div>
                            </div>
                            <div className="Blen-community-child-card-data-one">
                                <img className="img-icon-tutor MS-uiniversity-img-child" src={cardImage1} repeat-x></img>
                                <div className="MS-uiniversity-text-child">
                                    <h1>
                                        heading
                                    </h1>
                                    <p>Try this: go to any page on your website and count the marketing claims you make. How many times is your business described as easy, smart, effective, trusted, reliable? Are there half a dozen claims </p>
                                </div>
                            </div>
                            <div className="Blen-community-child-card-data-one">
                                <img className="img-icon-tutor MS-uiniversity-img-child" src={cardImage1} repeat-x></img>
                                <div className="MS-uiniversity-text-child">
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

export default BlenChildCommunityComp;