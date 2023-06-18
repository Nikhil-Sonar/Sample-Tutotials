import React from "react";
import './BlenHeader.css'

function BlenHeaderRender() {
    return (
        <section className="section-1">
            <div className="section-1-Card">
                <div className="header">
                    <div className="header-blen-left">
                        <div className="blen-text">MindSetters</div>
                    </div>
                    <div className="header-subject-center">
                        <div className="subject-text common-hover">
                            <a href="#" className="subject-text-Subjects common-hover">
                                Home
                            </a>
                            <a href="#" className="subject-text-IBResources common-hover">
                                Courses
                            </a>
                            <a href="#" className="subject-text-Tutors common-hover">
                                Testimonials
                            </a>
                            <a href="#" className="subject-text-Students common-hover">
                                Contacts
                            </a>
                            <a href="#" className="subject-text-Pricing common-hover">
                                About
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlenHeaderRender;