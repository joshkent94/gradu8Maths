import { faqList } from "../utils/helperFunctions/faqList";
import Faq from "./Faq";

export default function Faqs() {
    return (
        <div className="row p-5 faq" id="faq">
            <div className="col-md-12 py-5">
                <h2 className="text-center wow fadeInDown" data-wow-delay="0.4s">Frequently Asked Questions (FAQs)</h2>
            </div>

            <div className="accordion">
                {faqList.map(faq => {
                    return <Faq faq={faq} key={faq.question}/>
                })}
            </div>
        </div>
    );
};