import React from 'react';

const ContactPage = () => {
    return (
        <div className="contact-form">
            <h2>Contact Me</h2>
            <div>
                <form className="contact-form" action="/action_page.php">
                    <label className="contact-font">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.." />

                    <label className="contact-font">Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />


                    <label className="contact-font">Email</label>
                    <input type="email" id="email" name="email" placeholder="Your email" />


                    <label className="contact-font">Subject</label>
                    <textarea id="subject" name="subject" placeholder="Subject"></textarea>


                    <label className="contact-font">Message</label>
                    <textarea id="text" name="text" placeholder="Write something..."></textarea>
                    <input type="submit" value="Submit" />

                </form>
            </div>
        </div>
    );
};

export default ContactPage;