import { Accordion } from "react-bootstrap";
import { faqList } from "../../utils/helperFunctions/faqList";
import Faq from "./Faq";
import './Faqs.css';

export default function Faqs() {
    return (
        <div id="faqs">
            <div className="col-md-12 section-heading">
                <h2 className="text-center wow fadeInDown" data-wow-delay="0.4s">Frequently Asked Questions (FAQs)</h2>
            </div>

            <Accordion>
                {faqList.map(faq => {
                    return <Faq faq={faq} key={faq.question} />
                })}
            </Accordion>
        </div>
    );
};