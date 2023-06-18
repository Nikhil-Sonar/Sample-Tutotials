import React from "react";
import './Articles.css'
import cardImage1 from '../asset/books.png'
import cardImage2 from '../asset/assigments.png'
import cardImage3 from '../asset/questions.png'

function BlenArticlesComp(){
        return (
            <div className="section-4">
                <div className="Blen-articles">
                    <div className="Blen-articles-card">
                        <div className="Blen-articles-card-text">
                            <div>
                                <h1 className="Blen-articles-card-text-heading-one">MORE ABOUT MindSetters</h1>
                                <div className="Blen-articles-card-text-heading">MindSetters  curriculum is all about instilling the impactful knowledge in your generation that would make you better learners and better people.<br/>
                                    Here is how we ensure to embed the real-life skills you need to grow and create a better world.</div>
                            </div>
                        </div>
                        <div className="Blen-articles-card-data">
                            <div className="Blen-articles-card-data-flx">
                                <div className="Blen-articles-card-data-one">
                                    <img className="img-icon-tutor" src={cardImage1}></img>
                                    <h2>1. Unlimited Content Library</h2>

                                </div>
                                <div className="Blen-articles-card-data-two">
                                    <img className="img-icon-tutor" src={cardImage2}></img>
                                    <h2>1. Unlimited Content Library</h2>
                                </div>
                                <div className="Blen-articles-card-data-three">
                                    <img className="img-icon-tutor" src={cardImage3}></img>
                                    <h2>1. Unlimited Content Library</h2>
                                </div>
                            </div>
                        </div>
                        <div className="Blen-articles-card-btn">
                            <a href="#">Read more</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

export default BlenArticlesComp;