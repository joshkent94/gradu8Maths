export default function Testimonials() {
    return (
        <div className="row testimonials" id="testimonials">
            <div id="slides" className="col-md-12 align-self-center carousel slide carousel-fade" data-ride="carousel" data-interval="8000">
                <ul className="carousel-indicators">
                    <li data-target="#slides" data-slide-to="0" className="active"></li>
                    <li data-target="#slides" data-slide-to="1"></li>
                    <li data-target="#slides" data-slide-to="2"></li>
                    <li data-target="#slides" data-slide-to="3"></li>
                    <li data-target="#slides" data-slide-to="4"></li>
                    <li data-target="#slides" data-slide-to="5"></li>
                    <li data-target="#slides" data-slide-to="6"></li>
                    <li data-target="#slides" data-slide-to="7"></li>
                    <li data-target="#slides" data-slide-to="8"></li>
                </ul>
                <div className="carousel-inner">
                    <div className="carousel-item active d-flex align-items-center">
                        <div>
                            <p className="text-center font-italic p-4 wow fadeIn" data-wow-delay="0.4s">"Fantastic tuition, friendly and helpful. Helped me achieve my A* at GCSE, top grade at FSMQ and A<sup>*</sup>/A at maths and further maths ensuring I secured a place at London School of Economics. Would recommend to anyone wanting an excellent maths tutor."</p>
                            <h5 className="font-italic text-right wow fadeIn " data-wow-delay="0.4s">Kiera Glendenning</h5>
                        </div>
                    </div>
                    <div className="carousel-item d-flex align-items-center">
                        <div>
                            <p className="text-center font-italic p-4">"Andy is an amazing tutor. The confidence he has helped bring out in my son for A-level maths is why I would highly recommend him to anyone seeking support for this subject."</p>
                            <h5 className="font-italic text-right">Amna Sohail Khan</h5>
                        </div>
                    </div>
                    <div className="carousel-item d-flex align-items-center">
                        <div>
                            <p className="text-center font-italic p-4">"Andy has been fantastic tutoring my son this year Daniel has gone from a grade D to a B in his A level maths in 1 year. He made a big impact and we would highly recommend him."</p>
                            <h5 className="font-italic text-right">Becky Wilson</h5>
                        </div>
                    </div>
                    <div className="carousel-item d-flex align-items-center">
                        <div>
                            <p className="text-center font-italic p-4">"Andy has been excellent this year with tutoring my daughter in ‘A’ level maths, managed to improve her results in two papers by 5 grades. Always punctual, reliable, supportive and provided lots of extra homework material. Would definitely recommend, thankyou!"</p>
                            <h5 className="font-italic text-right">Trina Ryan</h5>
                        </div>
                    </div>
                    <div className="carousel-item d-flex align-items-center">
                        <div>
                            <p className="text-center font-italic p-4">"Gradu8maths is a fantastic tutorial path where learning is fun; what looked difficult becomes easy and achievable. The tutor designs an individual plan of learning to get the results. We enjoyed dealing with Andy, who we found to be a professional and dedicated person. We would highly recommend Andy for maths tuition to anyone who has high aspirations or simply needs help. Under Andy’s tutorage my son achieved a grade 9 GCSE, ‘A’ in GCSE statistics and A* in maths and further maths."</p>
                            <h5 className="font-italic text-right">Helen Gavin</h5>
                        </div>
                    </div>
                    <div className="carousel-item d-flex align-items-center">
                        <div>
                            <p className="text-center font-italic p-4">"Andy is an excellent tutor and helped me throughout year 13. At the end of year 12 I achieved a D grade in maths, however with Andy’s help I was able to achieve an A at the end of year 13 in ‘A’ level maths. Would definitely recommend."</p>
                            <h5 className="font-italic text-right">Joseph Clayton</h5>
                        </div>
                    </div>
                    <div className="carousel-item d-flex align-items-center">
                        <div>
                            <p className="text-center font-italic p-4">"Don't think I would be able to even pass GCSE maths without Andy! Great tutor who makes you feel very comfortable, definitely recommend to anyone I came on leaps and bounds!"</p>
                            <h5 className="font-italic text-right">Abbie Dobson</h5>
                        </div>
                    </div>
                    <div className="carousel-item d-flex align-items-center">
                        <div>
                            <p className="text-center font-italic p-4">"Andy's approach really clicked with my son and the AS/A level tuition sessions helped hugely to boost his confidence. We'll certainly be retaining Andy's services for the final year of my son's A level Maths. Thoroughly recommended!"</p>
                            <h5 className="font-italic text-right">Steve Wainwright</h5>
                        </div>
                    </div>
                    <div className="carousel-item d-flex align-items-center">
                        <div>
                            <p className="text-center font-italic p-4">"Andy has helped my daughter to gain confidence and achieve an excellent GCSE result. He explains things in a clear and logical way. I would highly recommend Andy as a tutor."</p>
                            <h5 className="font-italic text-right">Ayesha Zafar</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-12 text-center">
                <a href="https://www.facebook.com/pg/Gradu8maths/reviews/?ref=page_internal" target="_blank" rel='noreferrer' title="Link to facebook review page" className="btn reviewBtn wow fadeInUp" data-wow-delay="0.4s">Write a Review</a>
            </div>
        </div>
    );
};