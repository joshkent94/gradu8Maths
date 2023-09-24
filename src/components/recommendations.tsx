import { FC } from 'react'
import ScienceIcon from '@mui/icons-material/Science'
import BiotechIcon from '@mui/icons-material/Biotech'
import LightbulbIcon from '@mui/icons-material/Lightbulb'
import CreateIcon from '@mui/icons-material/Create'

const Recommendations: FC = () => {
    return (
        <div>
            <div>
                <h2 className="wow fadeInDown" data-wow-delay="0.4s">
                    Recommendations
                </h2>
            </div>
            <div className="wow fadeIn" data-wow-delay="0.5s">
                <p>
                    My students often ask me to recommend tutors for other
                    subjects, particularly English and the sciences. I must
                    stress at this point that I do not employ these people nor
                    do I receive an introductory fee, I simply want to make my
                    students aware of the very best tutors out there. My
                    recommendations are based solely on the feedback that I've
                    received from students throughout my 10+ years in the
                    tutoring business.
                </p>
            </div>
            <div className="wow fadeInUp" data-wow-delay="0.3s">
                <div>
                    <div>
                        <div>
                            <div>
                                <ScienceIcon fontSize="large" />
                                <BiotechIcon fontSize="large" />
                            </div>
                            <h4>Chemistry & Biology</h4>
                            <div>
                                <p>Tutor: David Bestford</p>
                                <p>
                                    <a
                                        href="tel:07946177025"
                                        title="Phone doncaster chemistry & biology tutor"
                                    >
                                        Contact: 07946177025
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div>
                            <p>
                                Dave has a 2:1 degree in Biology and Chemistry
                                from the University of Salford. He obtained his
                                PGCE from the University of Sheffield and has
                                since taught Biology in secondary schools at
                                both GCSE and 'A' level for over 40 years. He
                                has also taught GCSE Chemistry over this same
                                period. For over 20 years Dave has been an
                                examiner for Biology, initially at GCSE level
                                and now at 'A' level. He has over 30 years
                                experience as a personal tutor and comes highly
                                recommended.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="wow fadeInUp" data-wow-delay="0.3s">
                    <div>
                        <div>
                            <div>
                                <LightbulbIcon fontSize="large" />
                                <h4>Physics</h4>
                            </div>
                            <div>
                                <p>Details Coming Soon.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wow fadeInUp" data-wow-delay="0.3s">
                    <div>
                        <div>
                            <div>
                                <CreateIcon fontSize="large" />
                                <h4>English</h4>
                            </div>
                            <div>
                                <p>Details Coming Soon.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recommendations
