import React from 'react';
import '../Styles/App.css';

class Contact extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <section className="contact">
        <h2 className="contact-title">Contact me</h2>
        <form className="contact-form" action="contact.php" method="POST">
            <div className="contact-container">
                <label className="contact-label" htmlFor="email">Email</label>
                <input className="contact-input" id="email" name="email_email" type="email" placeholder="Email" required></input>
            </div>
            <div className="contact-container">
                <label className="contact-label" htmlFor="name">Name</label>
                <input className="contact-input" id="name" name="email_name" type="text" placeholder="Name" required></input>
            </div>
            <div className="contact-container">
                <label className="contact-label" htmlFor="message">Message</label>
                <textarea className="contact-textarea" id="message" name="email_message" rows="8" placeholder="Your message" required></textarea>
            </div>
            <div className="contact-container">
                <input className="contact-submit" id="submit" name="submit" type="submit" value="Send" />
            </div>
        </form>
      </section>
    )
  }
}

export default Contact;
