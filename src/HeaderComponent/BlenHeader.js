import React, { useState } from "react";
import './BlenHeader.css';
import { NavLink } from "react-router-dom";
import MindSetterLogo from '../asset/MindSetterLogo.jpg';
import ArrowUpLogo from '../asset/circle-arrow-up-solid.svg';

function BlenHeaderRender() {
    const [countCourse, setCountCourse] = useState("d-none");

    const handleCourseText = () => {
        const element = document.getElementById("myElement");
        if (element.classList.contains("d-none")) {
            setCountCourse("d-block");
        } else {
            setCountCourse("d-none");
        }
    }

    const CommonClickClassRemove = () => {
        setCountCourse("d-none");
    }


    const ScrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        });
        setCountCourse("d-none");
    };

    return (
        <section className="section-1">
            <div className="section-1-Card">
                <div className="header">
                    <div className="header-blen-left" onClick={CommonClickClassRemove}>
                        <NavLink to={"/"}><div className="blen-text"><img src={MindSetterLogo}></img></div></NavLink>
                    </div>
                    <div className="header-subject-center">
                        <div className="subject-text common-hover">
                            <a href="#" onClick={CommonClickClassRemove} className="subject-text-Subjects common-hover">
                                <NavLink className="home-text" to={"/"}>Home</NavLink>
                            </a>
                            <div className="subject-text-IBResources common-hover courses-text-parent" onClick={handleCourseText}>Courses
                                <NavLink className="home-text" to={'/ibdp'}><div className={`Option-courses ibdp ${countCourse}`} id="myElement">IBDP</div></NavLink>
                                <NavLink className="home-text" to={'/igcse'}><div className={`Option-courses igcse ${countCourse}`} id="myElement">IBCSC</div></NavLink>
                            </div>
                            {/* <a className="subject-text-Tutors common-hover">
                            <NavLink className="home-text" to={"testimonial"}>Testimonials</NavLink>
                            </a> */}
                            <a className="subject-text-Students common-hover" onClick={CommonClickClassRemove}>
                                <NavLink className="home-text" to={"contactform"}>Contacts</NavLink>
                            </a>
                            <a href="#" onClick={ScrollToBottom} className="subject-text-Pricing common-hover">
                                About
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#" className="scrool-top"><img src={ArrowUpLogo} /></a>
        </section>
    )
}

export default BlenHeaderRender;