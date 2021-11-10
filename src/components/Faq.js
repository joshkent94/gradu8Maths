import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Faq(props) {
    const {faq} = props;

    const handleClick = e => {
        const button = e.target;
        button.classList.toggle('active-faq');
        const answer = document.getElementById(faq.answer);
        answer.classList.toggle('show');
        const arrow = document.getElementById(`arrow-${faq.question}`);
        arrow.classList.toggle('rotate');
    };

    return (
        <div className="card faqCard wow fadeIn" data-wow-delay="0.4s">
            <button className="card-header btn faqBtn" type="button" name={faq.question} onClick={handleClick}>
                <FontAwesomeIcon id={`arrow-${faq.question}`} icon='angle-right' className='dropdown-arrow' />
                {faq.question}
            </button>
            <div id={faq.answer} className="card-body" onClick={handleClick}>
                {faq.answer}
            </div>
        </div>
    );
};