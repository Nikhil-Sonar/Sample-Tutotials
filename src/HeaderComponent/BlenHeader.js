import React from "react";
import './BlenHeader.css';
import { NavLink } from "react-router-dom";
import MindSetterLogo from '../asset/MindSetterLogo.jpg';
import ArrowUpLogo from '../asset/circle-arrow-up-solid.svg';

function BlenHeaderRender() {

   const ScrollToBottom = () => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      };

    return (
        <section className="section-1">
            <div className="section-1-Card">
                <div className="header">
                    <div className="header-blen-left">
                    <NavLink to={"/Sample-Tutotials"}><div className="blen-text"><img src={MindSetterLogo}></img></div></NavLink>
                    </div>
                    <div className="header-subject-center">
                        <div className="subject-text common-hover">
                            <a href="#" className="subject-text-Subjects common-hover">
                               <NavLink className="home-text" to={"/Sample-Tutotials"}>Home</NavLink> 
                            </a>
                            <a href="#" className="subject-text-Subjects common-hover">
                               <NavLink className="home-text" to={'/ibdp'}>IBDP</NavLink> 
                            </a>
                            <a href="#" className="subject-text-Subjects common-hover">
                               <NavLink className="home-text" to={'/igcse'}>IBCSC</NavLink> 
                            </a>
                            {/* <select onChange={handleSelectChange} placeholder="Cources" className="subject-text-IBResources common-hover courses-text-parent">
                                <option className="Option-courses">Courses</option>
                                <option value={'/ibdp'} className="Option-courses">IBDP</option>
                                <option value={'/igcse'} className="Option-courses">IBCSC</option>
                            </select> */}
                            {/* <a className="subject-text-Tutors common-hover">
                            <NavLink className="home-text" to={"testimonial"}>Testimonials</NavLink>
                            </a> */}
                            <a className="subject-text-Students common-hover">
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