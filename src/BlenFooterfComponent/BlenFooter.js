import React from 'react'
import './BlenFooter.css'
import blenLogo from '../asset/blen_logo.png'
import logo1 from '../asset/instagram.png'
import logo2 from '../asset/facebook.png'
import logo3 from '../asset/twitter.png'
import logo4 from '../asset/linkedin.png'
import logo5 from '../asset/medium.png'

function BlenFooterComp(){

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
                                    <div className='Blen-footer-card-flx-1month-discription'>
                                        <p className='Blen-footer-card-flx-1month-discription-txt ftsize-dis'>MindSetters is a powerful learning and teaching platform, thoughtfully designed for the MindSetters community. With 100% MindSetters Curriculum aligned resources such as interactive questions, key concepts, adaptive mock tests, assignments and detailed reports, unlock your true MindSetters potential.</p>
                                    </div>
                                </div>
                                <div className='Blen-footer-card-flx-3month'>
                                    <div className='Blen-footer-card-flx-3month-heading blen-mr-btm'>
                                        <p className='Blen-footer-card-flx-3month-heading-txt ftsize-dollor-height ftsize-heading'>Company Helpline</p>
                                    </div>
                                    <div className='Blen-footer-card-flx-3month-discription'>
                                        <p className='Blen-footer-card-flx-3month-discription-txt ftsize-dis'>About us</p>
                                        <p className='Blen-footer-card-flx-3month-discription-txt ftsize-dis'>Blog</p>
                                        <p className='Blen-footer-card-flx-3month-discription-txt ftsize-dis'>Announcements</p>
                                        <p className='Blen-footer-card-flx-3month-discription-txt ftsize-dis'>Terms of use</p>
                                        <p className='Blen-footer-card-flx-3month-discription-txt ftsize-dis'>Privacy statement</p>
                                        <p className='Blen-footer-card-flx-3month-discription-txt ftsize-dis'>Refer and Earn</p>
                                    </div>
                                </div>
                                <div className='Blen-footer-card-flx-unlimited'>
                                    <div className='Blen-footer-card-flx-unlimited-heading blen-mr-btm'>
                                        <p className='Blen-footer-card-flx-unlimited-heading-txt ftsize-dollor-height ftsize-heading'>Subjects for Students</p>
                                    </div>
                                    <div className='Blen-footer-card-flx-unlimited-discription'>
                                        <p className='Blen-footer-card-flx-12month-discription-txt ftsize-dis'>Mathematics AA SL</p>
                                        <p className='Blen-footer-card-flx-12month-discription-txt ftsize-dis'>Mathematics AI SL</p>
                                        <p className='Blen-footer-card-flx-12month-discription-txt ftsize-dis'>Mathematics AA HL</p>
                                        <p className='Blen-footer-card-flx-12month-discription-txt ftsize-dis'>Mathematics AI HL</p>
                                        <p className='Blen-footer-card-flx-12month-discription-txt ftsize-dis'>Biology SL</p>
                                        <p className='Blen-footer-card-flx-12month-discription-txt ftsize-dis'>Biology HL</p>
                                        <p className='Blen-footer-card-flx-12month-discription-txt ftsize-dis'>Chemistry SL</p>
                                        <p className='Blen-footer-card-flx-12month-discription-txt ftsize-dis'>Chemistry HL</p>
                                        <p className='Blen-footer-card-flx-12month-discription-txt ftsize-dis'>Physics SL</p>
                                        <p className='Blen-footer-card-flx-12month-discription-txt ftsize-dis'>Physics HL</p>
                                        <p className='Blen-footer-card-flx-12month-discription-txt ftsize-dis'>Business SL</p>
                                        <p className='Blen-footer-card-flx-12month-discription-txt ftsize-dis'>Business HL</p>
                                        <p className='Blen-footer-card-flx-12month-discription-txt ftsize-dis'>Economics SL</p>
                                        <p className='Blen-footer-card-flx-12month-discription-txt ftsize-dis'>Economics HL</p>
                                        <p className='Blen-footer-card-flx-12month-discription-txt ftsize-dis'>Psychology SL</p>
                                    </div>
                                </div>
                                <div className='Blen-footer-card-flx-12month'>
                                    <div className='Blen-footer-card-flx-12month-heading blen-mr-btm'>
                                        <p className='Blen-footer-card-flx-12month-heading-txt ftsize-dollor-height ftsize-heading'>Contact us</p>
                                    </div>
                                    <div className='Blen-footer-card-flx-12month-discription'>
                                        <p className='Blen-footer-card-flx-12month-discription-txt ftsize-dis contact-us-text'>How can we help? --{">"}</p>
                                    </div>
                                </div>
                                <div className='Blen-footer-card-flx-1month'>
                                    <div className='Blen-footer-card-flx-1month-heading blen-mr-btm'>
                                        <p className='Blen-footer-card-flx-1month-heading-txt ftsize-dollor-height ftsize-heading ms-height'>GET IN TOUCH WITH MindSetters</p>
                                    </div>
                                    <div className='Blen-footer-card-flx-1month-discription'>
                                        <div className='Blen-footer-card-flx-1month-discription-input-parent'>
                                        <p className='Blen-footer-card-flx-1month-discription-txt ftsize-dis'>Be the first to know about our news and special offers direct to your inbox.</p><br/>
                                        <input placeholder='Your email' className='blen-input-type' type='text'></input><button class="subbutton" onclick="ccMoosendSubscribe(194)">{">"}</button>
                                        </div>
                                        <div className='Blen-footer-card-flx-1month-discription-search'>
                                            <input type='checkbox'></input>
                                            <p>I consent to the processing of my personal data, in order to receive news and updates of Blen, according to the "Privacy Statement"</p>
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
                            </div>
                        </div>
                    </div>
                    <div className='Blen-footer-card-text'>
                        <p>
                        DISCLAIMER: MindSetters is an independent platform and is neither related nor associated to International. Kindly refer to our Terms of Use and Privacy Statement for further information.
                        </p>
                    </div>
                </div>
            </div>
            <div className='section-13'>
                <div className='blen-sticy-card'>
                    <p>This site was designed with the <span className='ms-com-link'> <a href='#'> MindSetters.com </a> </span> website builder. Create your website today.  <button>Start Now</button></p>
                </div>
            </div>
            </React.Fragment>
        )
    }

export default BlenFooterComp;