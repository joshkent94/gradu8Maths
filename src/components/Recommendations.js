import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Recommendations() {
    return (
        <div id="recommendations">
            <div className="col-md-12 section-heading">
                <h2 className="text-center wow fadeInDown" data-wow-delay="0.4s">Recommendations</h2>
            </div>
            <div className="col-md-12 px-5 mx-auto wow fadeIn" data-wow-delay="0.5s">
                <p>My students often ask me to recommend tutors for other subjects, particularly English and the sciences. I must stress at this point that I do not employ these people nor do I receive an introductory fee, I simply want to make my students aware of the very best tutors out there. My recommendations are based solely on the feedback that I’ve received from students throughout my 10+ years in the tutoring business.</p>
            </div>
            <div className="col-md-12 wow fadeInUp" data-wow-delay="0.3s">
                <div className="my-3 p-5 card recommendationsCard">
                    <div className="row">
                        <div className="col-md-6 mx-auto text-center my-auto py-3">
                            <div className="row recommendation-icons">
                                <FontAwesomeIcon icon='flask' size='2x' className="recommendation-icon" />
                                <FontAwesomeIcon icon='microscope' size='2x' className="recommendation-icon" />
                            </div>
                            <h4>Chemistry & Biology</h4>
                            <div className="row m-auto">
                                <p className="col-md-12 my-auto">Tutor: David Bestford</p>
                                <p className="col-md-12 my-auto"><a href="tel:07946177025" title="Phone doncaster chemistry & biology tutor" className="underline">Contact: 07946177025</a></p>
                            </div>
                        </div>
                        <div className="col-md-6 m-auto p-3">
                            <p className="m-auto text-justify">Dave has a 2:1 degree in Biology and Chemistry from the University of Salford. He obtained his PGCE from the University of Sheffield and has since taught Biology in secondary schools at both GCSE and ‘A’ level for over 40 years. He has also taught GCSE Chemistry over this same period. For over 20 years Dave has been an examiner for Biology, initially at GCSE level and now at ‘A’ level. He has over 30 years experience as a personal tutor and comes highly recommended.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="my-3 p-5 card recommendationsCard">
                    <div className="row">
                        <div className="col mx-auto  text-center my-auto py-5">
                            <FontAwesomeIcon icon='atom' size='2x' className="recommendation-icons" />
                            <h4 className="remove-margin">Physics</h4>
                        </div>
                        <div className="col m-auto p-3">
                            <p className="m-auto">Details Coming Soon.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="my-3 p-5 card recommendationsCard">
                    <div className="row">
                        <div className="col mx-auto text-center my-auto py-5">
                            <FontAwesomeIcon icon='pen-alt' size='2x' className="recommendation-icons" />
                            <h4 className="remove-margin">English</h4>
                        </div>
                        <div className="col m-auto p-3">
                            <p className="m-auto">Details Coming Soon.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};