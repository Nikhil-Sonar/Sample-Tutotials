import React from "react";
import './BlenTutor.css'
import cardImage1 from '../asset/books.png'
import cardImage2 from '../asset/assigments.png'
import cardImage3 from '../asset/questions.png'
import cardImage4 from '../asset/reports.png'
function BlenTutorComp(){
        return (
            <div className="section-4">
                <div className="Blen-tutor">
                    <div className="Blen-tutor-card">
                        <div className="Blen-tutor-card-text">
                            <div>
                                <h1 className="Blen-tutor-card-text-heading-one">MindSetters Tutor App</h1>
                                <h2 className="Blen-tutor-card-text-heading">Elevate your <span className="IBDP-text">teaching experience</span> with the right tools and resources</h2>
                            </div>
                        </div>
                        <div className="Blen-tutor-card-data">
                            <div className="Blen-tutor-card-data-flx">
                                <div className="Blen-tutor-card-data-one">
                                    <h2>1. Unlimited Content Library</h2>
                                    <img className="img-icon-tutor" src={cardImage1}></img>
                                    <div className="Blen-tutor-text">Get access to a massive MindSetters Repository with 100% curriculum-aligned resources.</div>
                                </div>
                                <div className="Blen-tutor-card-data-two">
                                    <h2>2. Create Assignments</h2>
                                    <img className="img-icon-tutor" src={cardImage2}></img>
                                    <div className="Blen-tutor-text">Discover a hassle-free way to set auto-graded assignments in a few easy clicks.</div>
                                </div>
                                <div className="Blen-tutor-card-data-three">
                                    <h2>3. Build Own Question</h2>
                                    <img className="img-icon-tutor" src={cardImage3}></img>
                                    <div className="Blen-tutor-text">Challenge your students with self-curated MindSetters resources tailored to your teaching needs</div>
                                </div>
                                <div className="Blen-tutor-card-data-four">
                                    <h2>4. Access Reports Cards</h2>
                                    <img className="img-icon-tutor" src={cardImage4}></img>
                                    <div className="Blen-tutor-text">Unlock actionable insights on how your students are performing in their assignments and reading.</div>
                                </div>
                            </div>
                        </div>
                        <div className="Blen-tutor-card-btn">
                            <a href="#">Explore Now</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

export default BlenTutorComp;