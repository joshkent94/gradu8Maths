import { Accordion } from "react-bootstrap";
import { faqList } from "../../utils/helperFunctions/faqList";
import EmbeddedVideo from "./EmbeddedVideo";
import Faq from "./Faq";
import './Faqs.css';

export default function Faqs() {
    return (
        <div id="faqs">
            <div className="col-md-12 section-heading">
                <h2 className="text-center wow fadeInDown" data-wow-delay="0.4s">Frequently Asked Questions (FAQs)</h2>
            </div>

            <p className="text-center remove-margin wow fadeInDown" data-wow-delay="0.4s">Students and parents often ask me what is required to secure a place at Oxford or Cambridge. In this video I sit down with my former pupil Illya, who is presently studying at Cambridge, to discuss his journey and ask for tips so that others may follow in his footsteps.</p>
            <EmbeddedVideo src={"https://www.youtube.com/embed/WSuWoX0tkU0"} />

            <Accordion>
                {faqList.map(faq => {
                    return <Faq faq={faq} key={faq.question} />
                })}
            </Accordion>
        </div>
    );
};