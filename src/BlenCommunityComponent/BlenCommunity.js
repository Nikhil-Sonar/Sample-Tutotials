import React from "react";
import './BlenCommunity.css'
import cardImage1 from '../asset/Student-image.jpg'
import heartImage from '../asset/heart.png'

function BlenCommunityComp(){
        return (
            <div className="section-7">
                <div className="Blen-community">
                    <div className="Blen-community-card">
                        <div className="Blen-community-card-text">
                            <div>
                                <h1 className="Blen-community-card-text-heading-one">Why MindSetters Community love Teaching <img src={heartImage}></img></h1>
                                <h2 className="Blen-community-card-text-heading">Here’s what they have to say...</h2>
                            </div>
                        </div>
                        <div className="Blen-community-card-data">
                            <div className="Blen-community-card-data-flx">
                                <div className="Blen-community-card-data-one">
                                    <img className="img-icon-tutor" src={cardImage1} repeat-x></img>
                                </div>
                            </div>
                        </div>
                        <div className="Blen-community-card-btn">
                            <a href="#">Join now</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

export default BlenCommunityComp;