import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Accordion } from 'react-bootstrap';

export default function Faq({ faq }) {
    return (
        <Accordion.Item eventKey={faq.question} className="card faqCard wow fadeIn" data-wow-delay="0.4s">
            <Accordion.Header>
                <FontAwesomeIcon id={`arrow-${faq.question}`} icon='angle-right' className='dropdown-arrow' />
                {faq.question}
            </Accordion.Header>
            <Accordion.Body>
                {faq.answer}
            </Accordion.Body>
        </Accordion.Item>
    );
};