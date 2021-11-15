import { useState } from "react";
import { Carousel } from "react-bootstrap";
import { testimonialList } from '../utils/helperFunctions/testimonialList';

export default function Testimonials() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div id="testimonials">
            <Carousel fade={true} controls={false} interval={7000} activeIndex={index} onSelect={handleSelect} className="col-md-12 align-self-center">
                {testimonialList.map(testimonial => {
                    return (
                        <Carousel.Item key={testimonial.reviewer} className="align-items-center">
                            <p className="text-center font-italic p-4 wow carousel-text">{`"${testimonial.review}"`}</p>
                            <Carousel.Caption>
                                <h5 className="font-italic wow carousel-text caption-text">{testimonial.reviewer}</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                    );
                })}
            </Carousel>
            <div className="col-md-12 text-center" id="write-review">
                <a href="https://www.facebook.com/pg/Gradu8maths/reviews/?ref=page_internal" target="_blank" rel='noreferrer' title="Link to facebook review page" className="btn reviewBtn wow fadeInUp" data-wow-delay="0.4s">Write a Review</a>
            </div>
        </div>
    );
};