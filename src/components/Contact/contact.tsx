import { FC } from 'react'
import emailjs from '@emailjs/browser'
import './contact.css'

const Contact: FC = () => {
    const handleFormSubmit = async (e) => {
        e.preventDefault()
        emailjs
            .sendForm(
                'service_uqdslb8',
                'template_f6uou5i',
                e.target,
                process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY
            )
            .then(
                (result) => {
                    console.log(result.text)
                },
                (error) => {
                    console.log(error.text)
                }
            )
    }

    return (
        <div id="contact">
            <div className="col-md-12 section-heading">
                <h2
                    className="text-center wow fadeInDown"
                    data-wow-delay="0.4s"
                >
                    Contact
                </h2>
            </div>
            <form className="row" id="contact-form" onSubmit={handleFormSubmit}>
                <div className="form-group col-md-6">
                    <input
                        name="name"
                        type="text"
                        className="form-control wow fadeInDown"
                        data-wow-delay="0.3s"
                        id="nameInput"
                        placeholder="Name"
                        required
                    />
                </div>
                <div className="form-group col-md-6">
                    <input
                        name="number"
                        type="tel"
                        className="form-control wow fadeInDown"
                        data-wow-delay="0.3s"
                        id="subjectInput"
                        placeholder="Phone Number"
                        required
                    />
                </div>
                <div className="form-group col-md-12">
                    <textarea
                        name="message"
                        className="form-control messageForm wow fadeInDown"
                        data-wow-delay="0.3s"
                        id="messageInput"
                        placeholder="Message"
                        required
                    ></textarea>
                </div>
                <div className="col-md-12 text-center">
                    <button
                        type="submit"
                        className="btn contactBtn wow fadeInUp"
                        data-wow-delay="0.4s"
                    >
                        Get in touch
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Contact
