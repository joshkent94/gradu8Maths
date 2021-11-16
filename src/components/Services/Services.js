import sine_wave from '../../assets/sine_wave.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Services.css';

export default function Services() {
    return (
        <div id='services'>
            <div className="col-md-12 section-heading">
                <h2 className="text-center wow fadeInDown" data-wow-delay="0.4s">Services</h2>
            </div>
            <div className="col-md-12 wow fadeInUp" data-wow-delay="0.3s">
                <div className="mx-5 my-3 p-5 card">
                    <div className="row">
                        <div className="col-sm-3 text-center mx-auto my-auto py-5">
                            <FontAwesomeIcon icon='home' size='5x' />
                        </div>
                        <div className="col-sm-9 my-auto">
                            <h4>Home Tutoring</h4>
                            <p className="remove-margin">Studies have shown that children learn best when being taught one-to-one and in comfortable and familiar surroundings. For this reason I travel to you to tutor as I firmly believe children learn best in the comfort of their own home.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-12 wow fadeInUp" data-wow-delay="0.3s">
                <div className="mx-5 my-3 p-5 card">
                    <div className="row">
                        <div className="col-sm-3 text-center mx-auto my-auto py-5">
                            <img className='sine-wave' src={sine_wave} alt="Sine wave" />
                        </div>
                        <div className="col-sm-9 my-auto">
                            <h4>Flexible To Suit Your Needs</h4>
                            <p>I tutor all ages in preparation for:</p>
                            <ul>
                                <li>SAT’s</li>
                                <li>Entrance exams</li>
                                <li>GCSE maths (I also offer GCSE statistics as an additional qualification)</li>
                                <li>FSMQ (Free Standing Maths Qualification for high achieving GCSE students)</li>
                                <li>‘A’ level maths</li>
                                <li>‘A’ level further maths</li>
                            </ul>
                            <p className="remove-margin">I also offer bespoke tuition for other less common exams e.g. Nursing exams, MAT (Oxford entrance exam), STEP (Cambridge entrance exam) and undergraduate engineering exams.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-12 wow fadeInUp" data-wow-delay="0.3s">
                <div className="mx-5 my-3 p-5 card">
                    <div className="row">
                        <div className="col-sm-3 text-center mx-auto my-auto py-5">
                            <FontAwesomeIcon icon='plus' size='5x' />
                        </div>
                        <div className="col-sm-9 my-auto">
                            <h4>And More</h4>
                            <p>A lesson is typically one-hour in duration although ‘A’ level students (and above) often prefer a two-hour lesson given the complexity of some topics.</p>
                            <p className="remove-margin">At Easter and just prior to the exams I offer three-hour revision sessions. During these we target areas that are in need of development and also practice exam technique. These are tough sessions but the results speak for themselves!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};