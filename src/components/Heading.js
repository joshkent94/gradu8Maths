import Navigation from "./Navigation";

export default function Heading() {
    return (
        <header>
            <Navigation />
            <div className="view wow fadeIn background">
                <div className="align-items-center">
                    <div className="container">
                        <div className="row g-0">
                            <div className="col-md-12 mb-4 text-center wow fadeInUp centerTitle">
                                <h1 className=" h1-reponsive text-uppercase font-weight-bold wow fadeInDown" data-wow-delay="0.3s"><strong>Gradu8 Maths</strong><hr className="hr-light my-4 wow fadeInDown" data-wow-delay="0.4s" /></h1>
                                <h5 className="text-uppercase mb-4 white-text wow fadeInDown" data-wow-delay="0.4s"><strong>Mathematics Tuition in Doncaster</strong></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};