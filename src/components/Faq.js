import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Faq(props) {
    const faq = props.faq;

    return (
        <div className="card faqCard wow fadeIn" data-wow-delay="0.4s">
                <button className="card-header btn faqBtn" type="button">
                    <FontAwesomeIcon icon='angle-right' className='dropdown-arrow' />
                    {faq.question}
                </button>
                <div className="card-body">
                    {faq.answer}
                </div>
        </div>
    );
};