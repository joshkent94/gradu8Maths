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

            <p className="text-center remove-margin wow fadeInDown" data-wow-delay="0.4s">Many students and parents have asked me what is required to be accepted into top universities such as Oxford and Cambridge. In the video below I sit down with my former pupil, Ilya, who was accepted into Cambridge, to discuss his journey and ask for his tips on how others can follow suit.</p>
            <EmbeddedVideo src={"https://www.youtube.com/embed/onOqVPeFT94"} />

            <Accordion>
                {faqList.map(faq => {
                    return <Faq faq={faq} key={faq.question} />
                })}
            </Accordion>
        </div>
    );
};