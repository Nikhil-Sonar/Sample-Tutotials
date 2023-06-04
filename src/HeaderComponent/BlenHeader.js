import React, { Component } from "react";
import './BlenHeader.css'

class BlenHeaderRender extends Component {

    render() {
        return (
            <section className="section-1">
                <div className="section-1-Card">
                    <div className="header">
                        <div className="header-blen-left">
                            <div className="blen-text">MS</div>
                        </div>
                        <div className="header-subject-center">
                            <div className="subject-text common-hover">
                                <a href="https://app.helloblen.com/register" className="subject-text-Subjects common-hover">
                                    Home
                                </a>
                                <a href="https://app.helloblen.com/register" className="subject-text-IBResources common-hover">
                                    Courses
                                </a>
                                <a href="https://app.helloblen.com/register" className="subject-text-Tutors common-hover">
                                    Testimonials
                                </a>
                                <a href="https://app.helloblen.com/register" className="subject-text-Students common-hover">
                                    Contacts
                                </a>
                                <a href="https://app.helloblen.com/register" className="subject-text-Pricing common-hover">
                                    About
                                </a>
                            </div>
                        </div>
                        <div className="header-login-right">
                            <a href="https://app.helloblen.com/register" className="header-login-right-login">
                                Login
                            </a>
                            <a href="https://app.helloblen.com/register" className="header-login-right-signup">
                                Sign up
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default BlenHeaderRender;