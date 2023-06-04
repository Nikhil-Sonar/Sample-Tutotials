import React, { Component } from "react";
import './Members.css'
import membersImg from'../asset/members.png'

class MembersComp extends Component {

    render() {
          const sliderSettings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            arrows:true,
            centerPadding: '60px',
            
          }
        return (
            <div className="section-5">
                <div className="members">
                    <div className="members-card">
                        <div className="members-card-text">
                            <div>
                                <h1 className="members-card-text-heading-one">Join the largest community of MS teachers and educators!</h1>
                                <h2 className="members-card-text-heading">Here’s what they have to say...</h2>
                            </div>
                        </div>
                        <div className="members-card-data">
                            <div className="members-card-data-flx">
                                    <div className="members-card-data-one">
                                        <div className="members-text"><p className="member-text-tag">“With MS assignments, my students feel more engaged and enriched.”</p></div>
                                        <h2>Ann Wu, MS Economics Teacher, China</h2>
                                    </div>
                            </div>
                        </div>
                        <div className="members-card-btn">
                            <a href="https://app.helloblen.com/register">Explore Now</a>
                        </div>
                        <div className="members-card-img">
                            <img src={membersImg}></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MembersComp;