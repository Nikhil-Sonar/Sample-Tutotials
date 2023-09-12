import React from "react";
import './Articles.css'
import cardImage1 from '../asset/books.png'
import cardImage2 from '../asset/assigments.png'
import cardImage3 from '../asset/questions.png'

function BlenArticlesComp() {
    return (
        <div className="section-4">
            <div className="Blen-articles">
                <div className="Blen-articles-card">
                    <div className="Blen-articles-card-text">
                        <div>
                            <h1 className="Blen-articles-card-text-heading-one">More About <span className="IBDP-text">MindSetters</span></h1>
                        </div>
                    </div>
                    <div className="Blen-articles-card-data">
                        <div className="Blen-articles-card-data-flx">
                            <div className="Blen-articles-card-data-one">
                                <h2>Our Unique Approach</h2>
                                <p className="Summary-Pointer">At Mindsetters, we believe in a holistic approach to learning. We don't just teach math; we inspire a genuine love for the subject. Our highly qualified educators impart knowledge with enthusiasm, creating a positive and stimulating environment that fosters intellectual growth...</p>

                            </div>
                            <div className="Blen-articles-card-data-two">
                                <h2>Comprehensive Subject Coverage</h2>
                                <p className="Summary-Pointer">We've got you covered! From the fundamental concepts to the most complex topics, we offer comprehensive math education across all levels. Our curriculum caters to IGCSE, A level, and IBDP syllabi, ensuring that every student receives a tailored learning experience that aligns with their academic requirements...</p>
                            </div>
                            <div className="Blen-articles-card-data-three">
                                <h2>Personalized Attention</h2>
                                <p className="Summary-Pointer">Small is mighty! We take pride in our small-sized group sessions and 1-on-1 interactions. This personalized attention allows our educators to understand each student's unique learning style and address their specific challenges effectively. By tailoring our teaching approach, we help students unlock their full potential and excel in mathematics...</p>
                            </div>
                            <div className="Blen-articles-card-data-four">
                                <h2>The Mindsetters Experience</h2>
                                <p className="Summary-Pointer">At Mindsetters, it's not just about formulas and equations; it's about instilling a growth mindset. Our teaching philosophy focuses on cultivating resilience, problem-solving abilities, and confidence in our students. We go beyond the textbooks to nurture critical thinking skills and a deep understanding of mathematical concepts...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlenArticlesComp;