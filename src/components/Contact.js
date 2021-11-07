export default function Contact() {
    return (
        <div className="row pt-5 contact" id="contact">
            <div className="col-md-12">
                <h2 className="text-center wow fadeInDown" data-wow-delay="0.4s">Contact</h2>
            </div>
            <form className="row contact" id="contact-form" method="post" action="/public/php/send_form_email.php">
                <div className="form-group col-md-6">
                    <input name="name" type="text" className="form-control wow fadeInDown" data-wow-delay="0.3s" id="nameInput" placeholder="Your Name" />
                </div>
                <div className="form-group col-md-6">
                    <input name="email" type="email" className="form-control wow fadeInDown" data-wow-delay="0.3s" id="emailInput" placeholder="Your Email" />
                </div>
                <div className="form-group col-md-12">
                    <textarea name="message" type="message" className="form-control messageForm wow fadeInDown" data-wow-delay="0.3s" id="messageInput" placeholder="Your Message"></textarea>
                </div>
                <div className="col-md-12 text-center">
                    <button type="submit" className="btn contactBtn my-5 wow fadeInUp" data-wow-delay="0.4s">Get in touch</button>
                </div>
            </form>
        </div>
    );
};