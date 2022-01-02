import Navigation from "./Navigation";
import './Heading.css';

export default function Heading() {
    return (
        <header>
            <Navigation />
            <div className="view wow fadeIn background">
                <div className="align-items-center">
                    <div className="container">
                        <div className="row g-0">
                            <div className="col-md-12 mb-4 text-center wow fadeInUp centerTitle">
                                <h1 className="main-title remove-margin text-uppercase wow fadeInDown" data-wow-delay="0.3s"><strong>Gradu8 Maths</strong></h1>
                                <hr className="hr-light my-4 wow fadeInDown" data-wow-delay="0.4s" />
                                <h5 className="sub-title text-uppercase mb-4 white-text wow fadeInDown" data-wow-delay="0.4s"><strong>Mathematics Tuition</strong></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};