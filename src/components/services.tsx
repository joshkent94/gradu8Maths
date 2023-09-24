import { FC } from 'react'
import sine_wave from '@assets/sine_wave.png'
import HomeIcon from '@mui/icons-material/Home'
import AddIcon from '@mui/icons-material/Add'

const Services: FC = () => {
    return (
        <div>
            <div>
                <h2 className="wow fadeInDown" data-wow-delay="0.4s">
                    Services
                </h2>
            </div>
            <div className="wow fadeInUp" data-wow-delay="0.3s">
                <div>
                    <div>
                        <div>
                            <HomeIcon fontSize="large" />
                        </div>
                        <div>
                            <h4>Home Tutoring</h4>
                            <p>
                                Studies have shown that children learn best when
                                being taught one-to-one and in comfortable and
                                familiar surroundings. For this reason, if you
                                live local, I travel to you to tutor as I firmly
                                believe children learn best in the comfort of
                                their own home.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wow fadeInUp" data-wow-delay="0.3s">
                <div>
                    <div>
                        <div>
                            <img src={sine_wave} alt="Sine wave" />
                        </div>
                        <div>
                            <h4>Flexible To Suit Your Needs</h4>
                            <p>I tutor all ages in preparation for:</p>
                            <ul>
                                <li>SAT's</li>
                                <li>Entrance exams</li>
                                <li>GCSE maths and further maths</li>
                                <li>'A' level maths</li>
                                <li>'A' level further maths</li>
                                <li>
                                    TMUA (Test of Mathematics for University
                                    Admission - good performance may lead to
                                    reduced university offers)
                                </li>
                            </ul>
                            <p>
                                I also offer bespoke tuition for other less
                                common exams e.g. Nursing exams, MAT (Oxford
                                entrance exam), STEP (Cambridge entrance exam)
                                and undergraduate engineering exams.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wow fadeInUp" data-wow-delay="0.3s">
                <div>
                    <div>
                        <div>
                            <AddIcon fontSize="large" />
                        </div>
                        <div>
                            <h4>And More</h4>
                            <p>
                                A lesson is typically one-hour in duration
                                although 'A' level students (and above) often
                                prefer a two-hour lesson given the complexity of
                                some topics.
                            </p>
                            <p>
                                At Easter and just prior to the exams I offer
                                three-hour revision sessions. During these we
                                target areas that are in need of development and
                                also practice exam technique. These are tough
                                sessions but the results speak for themselves!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
