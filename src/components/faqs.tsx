import { FC } from 'react'
import { Accordion } from '@mui/material'
import EmbeddedVideo from '@components/embedded-video'
import Faq from '@components/faq'
import { faqList } from '@utils/faqList'

const Faqs: FC = () => {
    return (
        <div>
            <div>
                <h2 className="wow fadeInDown" data-wow-delay="0.4s">
                    Frequently Asked Questions (FAQs)
                </h2>
            </div>

            <p className="wow fadeInDown" data-wow-delay="0.4s">
                Students and parents often ask me what is required to secure a
                place at Oxford or Cambridge. In this video I sit down with my
                former pupil Illya, who is presently studying at Cambridge, to
                discuss his journey and ask for tips so that others may follow
                in his footsteps.
            </p>
            <EmbeddedVideo src={'https://www.youtube.com/embed/WSuWoX0tkU0'} />

            <Accordion className="wow fadeInDown" data-wow-delay="0.4s">
                {faqList.map((faq) => {
                    return <Faq faq={faq} key={faq.question} />
                })}
            </Accordion>
        </div>
    )
}

export default Faqs
