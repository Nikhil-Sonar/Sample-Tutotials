import React from 'react'
import './BlenFooter.css'
import logo1 from '../asset/instagram.png'
import logo2 from '../asset/facebook.png'
import logo3 from '../asset/twitter.png'
import logo4 from '../asset/linkedin.png'
import logo5 from '../asset/medium.png'

function BlenFooterComp() {

    return (
        <React.Fragment>
            <div className='section-12'>
                <div className='Blen-footer'>
                    <div className='Blen-footer-card'>
                        <div className='Blen-footer-card-flx'>
                            <div className='subs-card-align'>
                                <div className='Blen-footer-card-flx-1month'>
                                    <div className='Blen-footer-card-flx-1month-heading blen-mr-btm'>
                                        <p className='Blen-footer-card-flx-1month-heading-txt ftsize-dollor-height ftsize-heading ms-size-txt'>MindSetters</p>
                                    </div>
                                    <h2 className='about-us-txt'>About Us</h2>
                                    <div className='Blen-footer-card-flx-1month-discription'>
                                        <p className='Blen-footer-card-flx-1month-discription-txt ftsize-dis'><span className='Mindshetter-Community'>Join the Mindsetters Community</span> Are you ready to embark on a transformative journey in mathematics education? Join the vibrant and supportive community at Mindsetters. Our students not only excel academically but also build lifelong friendships and a passion for learning that extends far beyond the classroom...</p>
                                    </div>
                                </div>
                                <div className='Blen-footer-card-flx-1month get-in-touch-align mar-rt'>
                                    <div className='Blen-footer-card-flx-1month-heading blen-mr-btm'>
                                        <h2 className='Blen-footer-card-flx-1month-heading-txt ftsize-dollor-height ftsize-heading ms-height'>GET IN TOUCH</h2>
                                    </div>
                                    <div className='Blen-footer-card-flx-1month-discription'>
                                        <div className='Blen-footer-card-flx-1month-discription-input-parent'>
                                            <p className='Blen-footer-card-flx-1month-discription-txt ftsize-dis'>MINDSETTERS ACADEMY, 1NORTH BRIDGE ROAD, HIGH STREET CENTER, 14-04, SINGAPORE- 179094 <br/> <span>Phone No :</span><span> +65 9899 6939</span><br/> <a target='_blank' href='https://www.google.com/maps/place/Mind+Setters+Academy,+Singapore/@1.2900089,103.8468583,17z/data=!3m2!4b1!5s0x31da199b63518251:0xef3f6e0148acc983!4m6!3m5!1s0x31da190c65001d87:0xd99e931ebca81686!8m2!3d1.2900089!4d103.8494332!16s%2Fg%2F11gxw071tv?entry=ttu' className='address-link'>ClickHere</a></p><br />
                                        </div>
                                        <div className='Blen-footer-card-flx-1month-discription-social-m'>
                                            <img src={logo1}></img>
                                            <img src={logo2}></img>
                                            <img src={logo3}></img>
                                            <img src={logo4}></img>
                                            <img src={logo5}></img>
                                        </div>
                                    </div>
                                </div>
                                <div className='Blen-footer-card-flx-1month get-in-touch-align google-map-card'>
                                    <div className="google-map">
                                        <iframe
                                            src="https://maps.google.com/maps?q=mindsetter%201%20North%20Bridge%20Rd,%20Singapore%20179094&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                                            width="600"
                                            height="300"
                                            allowfullscreen=""
                                            loading="lazy"
                                            className='google-maps'
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default BlenFooterComp;