import React, { useState } from "react";

export default function Contact() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');

    const handleNameChange = e => {
        e.preventDefault();
        setName(e.target.value);
    };

    const handleNumberChange = e => {
        e.preventDefault();
        setNumber(e.target.value);
    };

    const handleMessageChange = e => {
        e.preventDefault();
        setMessage(e.target.value);
    };

    const handleFormSubmit = e => {
        e.preventDefault();
        const subject = `${name} - ${number}`;
        const body = `Hi Andy,%0D%0A%0D%0A${message}%0D%0A%0D%0AKind regards,%0D%0A${name}%0D%0A%0D%0A`;
        window.open(`mailto:gradu8maths@gmail.com?subject=${subject}&body=${body}`);
    };

    return (
        <div className="row p-5" id="contact">
            <div className="col-md-12 section-heading">
                <h2 className="text-center wow fadeInDown" data-wow-delay="0.4s">Contact</h2>
            </div>
            <form className="row" id="contact-form" onSubmit={handleFormSubmit}>
                <div className="form-group col-md-6">
                    <input name="name" type="text" className="form-control wow fadeInDown" data-wow-delay="0.3s" id="nameInput" placeholder="Name" onChange={handleNameChange} required />
                </div>
                <div className="form-group col-md-6">
                    <input name="number" type="tel" className="form-control wow fadeInDown" data-wow-delay="0.3s" id="subjectInput" placeholder="Phone Number" onChange={handleNumberChange} required />
                </div>
                <div className="form-group col-md-12">
                    <textarea name="message" type="message" className="form-control messageForm wow fadeInDown" data-wow-delay="0.3s" id="messageInput" placeholder="Message" onChange={handleMessageChange} required></textarea>
                </div>
                <div className="col-md-12 text-center">
                    <button type="submit" className="btn contactBtn wow fadeInUp" data-wow-delay="0.4s">Get in touch</button>
                </div>
            </form>
        </div>
    );
};