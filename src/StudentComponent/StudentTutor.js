import React from "react";
import './StudentTutor.css'
import cardImage1 from '../asset/assigments (1).png'
import cardImage2 from '../asset/own-test.png'
import cardImage3 from '../asset/progress.png'
import cardImage4 from '../asset/questions (1).png'
import cardImage5 from '../asset/bookmarks.png'

function StudentTutorComp(){
        return (
            <div className="section-6">
                <div className="student-tutor">
                    <div className="student-tutor-card">
                        <div className="student-tutor-card-text">
                            <div>
                                <h1 className="student-tutor-card-text-heading-one">Student App</h1>
                                <h2 className="student-tutor-card-text-heading">Accelerate your <span className="IBDP-text">learning</span> that delivers better results</h2>
                                <div className="student-tutor-card-text-heading-para">Higher Scores Guaranteed</div>
                            </div>
                        </div>
                        <div className="student-tutor-card-data">
                            <div className="student-tutor-card-data-flx">
                                <div className="student-tutor-card-data-one">
                                    <h2>1. Unlimited Content</h2>
                                    <img className="img-icon-tutor" src={cardImage1}></img>
                                    <div className="student-tutor-text">Get access to a massive MindSetters Repository with 100% curriculum-aligned resources.</div>
                                </div>
                                <div className="student-tutor-card-data-two">
                                    <h2>2. Create Assignments</h2>
                                    <img className="img-icon-tutor" src={cardImage2}></img>
                                    <div className="student-tutor-text">Discover a hassle-free way to set auto-graded assignments in a few easy clicks.</div>
                                </div>
                                <div className="student-tutor-card-data-three">
                                    <h2>3. Build Own Question</h2>
                                    <img className="img-icon-tutor" src={cardImage3}></img>
                                    <div className="student-tutor-text">Challenge your students with self-curated MindSetters resources tailored to your teaching needs</div>
                                </div>
                                <div className="student-tutor-card-data-four">
                                    <h2>4. Access Reports</h2>
                                    <img className="img-icon-tutor" src={cardImage4}></img>
                                    <div className="student-tutor-text">Unlock actionable insights on how your students are performing in their assignments and reading.</div>
                                </div>
                                <div className="student-tutor-card-data-four">
                                    <h2>4. Access Reports</h2>
                                    <img className="img-icon-tutor" src={cardImage5}></img>
                                    <div className="student-tutor-text">Unlock actionable insights on how your students are performing in their assignments and reading.</div>
                                </div>
                            </div>
                        </div>
                        <div className="student-tutor-card-btn">
                            <a href="#">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

export default StudentTutorComp;