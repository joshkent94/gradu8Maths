import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Faq(props) {
    const faq = props.faq;

    const handleClick = e => {
        const button = e.target;
        button.classList.toggle('active-faq');
        const answer = document.getElementById(faq.answer);
        answer.classList.toggle('show');
    };

    return (
        <div className="card faqCard wow fadeIn" data-wow-delay="0.4s">
            <button className="card-header btn faqBtn" type="button" name={faq.question} onClick={handleClick}>
                <FontAwesomeIcon icon='angle-right' className='dropdown-arrow' />
                {faq.question}
            </button>
            <div id={faq.answer} className="card-body">
                {faq.answer}
            </div>
        </div>
    );
};
