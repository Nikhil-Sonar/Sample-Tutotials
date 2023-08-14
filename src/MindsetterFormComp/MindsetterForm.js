import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import '../MindsetterFormComp/MindsetterForm.css';

function FormdataRender() {
const form = useRef();
const [ClassCount, SetClassCount] = useState('d-none')

const sendEmailEvent = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_aftsw4s', 'template_vvis389', form.current, '1H0FOJFgmitUBQLz6')
    .then((result) => {
        if(result.status == 200){
            console.log("Email Send");
            document.getElementsByClassName("first-name-val").First_Name.value = "";
            document.getElementsByClassName("last-name-val").Last_Name.value = ""
            document.getElementsByClassName("email-val").Email_Id.value = ""
            document.getElementsByClassName("mobile-no-val").Mobile_No.value = ""
            document.getElementsByClassName("message-val").Text_Message.value = ""
            SetClassCount('d-block');
        }
    }, (error) => {
        console.log(error.text);
     });
}

    return (
        <div className="section-form">
            <div className="form-parent">
                <div class="container">
                    <div class="text">
                        Contact us Form
                    </div>
                    <p className="contact-border-child"></p>
                    <form ref={form} onSubmit={sendEmailEvent}>
                        <div class="form-row">
                            <div class="input-data">
                                <input type="text" className="first-name-val" name="First_Name" required />
                                <div class="underline"></div>
                                <label for="">First Name</label>
                            </div>
                            <div class="input-data">
                                <input type="text" className="last-name-val" name="Last_Name" required />
                                <div class="underline"></div>
                                <label for="">Last Name</label>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="input-data">
                                <input type="text" className="email-val" name="Email_Id" required />
                                <div class="underline"></div>
                                <label for="">Email Address</label>
                            </div>
                            <div class="input-data">
                                <input name="Mobile_No" className="mobile-no-val" type="number" pattern="^{0-9}/{10}" required/>
                                <div class="underline"></div>
                                <label for="">Contact No</label>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="input-data textarea">
                                <textarea name="Text_Message" className="message-val" rows="8" cols="80" required></textarea>
                                <br />
                                <div class="underline"></div>
                                <label for="">Write your message</label>
                                <div className={`Congratulation ${ClassCount}`}>Thank You</div>
                                <div class="form-row submit-btn">
                                    <div class="input-data">
                                        <div class="inner"></div>
                                        <input type="submit" className="sendEmail" value="submit" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormdataRender;