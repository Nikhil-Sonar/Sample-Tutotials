import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container , Accordion} from 'react-bootstrap'  
import './BlenDynamic.css'
import centerDYlogo from '../asset/planet.png'
import sideImage1 from '../asset/biology-5.svg'
import sideImage2 from '../asset/global-business.svg'
import sideImage3 from '../asset/chemistry-10-1.svg'
import sideImage4 from '../asset/economics.svg'
import sideImage5 from '../asset/physics-6.svg'
import sideImage6 from '../asset/s_-psychology.svg'
import sideImage7 from '../asset/186-math.svg'

function BlenDynamicCard() {
    return (
        <section className="section-2">
            <div className="dynamic-card">
                <div className="dynamic-card-text">
                    <div className="dynamic-card-text-exam">
                        <h2 className="dynamic-card-text-IBDP">Exactly What You Need!</h2>
                        <h3 className="dynamic-card-text-Teaching">A Powerful Learning and Teaching Platform for MindSetters</h3>
                        <div className="dynamic-card-text-btn">
                            <a className="dynamic-card-text-btn-a" href="#" target="_blank">Start your Free Trial today</a>
                        </div>
                    </div>
                </div>
                <div className="dynamic-card-img-container">
                    <div className="dynamic-card-img">
                        <div>
                            <div className="planetImage">
                                <img className="big-image" src={centerDYlogo} ></img>
                                <h1 className="dynamic-card-center-text">MindSetters</h1>
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
                            <a className="generalButton" href="#">Browse Subjects</a>
                        </div>
                    </div>
                    <Container className='p-4 accordian-parrent'>
                        <div className="accordian-p1">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item className="distance-card" eventKey="1">
                                <Accordion.Header>Mathematics</Accordion.Header>
                                <Accordion.Body>
                                    AA / AI
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Physics</Accordion.Header>
                                <Accordion.Body>
                                    HL / SL
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        </div>
                        <div className="accordian-p2">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item className="distance-card" eventKey="3">
                                <Accordion.Header>Chemistry</Accordion.Header>
                                <Accordion.Body>
                                    HL / SL
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Biology</Accordion.Header>
                                <Accordion.Body>
                                    HL /  SL
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        </div>
                        <div className="accordian-p3">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item className="distance-card" eventKey="5">
                                <Accordion.Header>Eco/Business</Accordion.Header>
                                <Accordion.Body>
                                    HL / SL
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="6">
                                <Accordion.Header>SAS - Maths</Accordion.Header>
                                <Accordion.Body>
                                    ALG-I / ALG-II 
                                </Accordion.Body>
                                <Accordion.Body>
                                    Geometry
                                </Accordion.Body>
                                <Accordion.Body>
                                    Cal-I / Precalculus
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        </div>
                        <div className="accordian-p4">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item className="distance-card" eventKey="7">
                                <Accordion.Header>IGCSE Maths</Accordion.Header>
                                <Accordion.Body>
                                    Extended Maths / Additional Maths
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="8">
                                <Accordion.Header>IGCSE Science</Accordion.Header>
                                <Accordion.Body>
                                Physics / Chemistry / Biology
                                </Accordion.Body>
                                <Accordion.Body>
                                Co-ordinated Science / Combine Science
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        </div>
                    </Container>
                </div>
            </div>
        </section >
    )
}

export default BlenDynamicCard;